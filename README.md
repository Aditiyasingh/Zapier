# Zapier Clone

A minimal Zapier-style automation platform built as a Turborepo monorepo. Users
connect a **trigger** (currently: an incoming webhook) to one or more
**actions** (currently: sending an email) through a small web UI. Firing the
trigger runs the Zap's actions through an outbox → Kafka → worker pipeline.

## How it works

```
apps/web (Next.js)  --REST-->  apps/primary-backend (auth, Zap CRUD)
                                        |
                                        v
                                   packages/db (Postgres via Prisma)
                                        ^
                                        |
external caller --POST--> apps/hooks --+  (writes a zapRun + outbox row,
                                           in one transaction)
                                        |
                              apps/processor polls the outbox table
                              every 3s and publishes each zapRunId
                              to the Kafka topic "zap-event"
                                        |
                                        v
                              apps/worker consumes the topic, loads the
                              zapRun's Zap → ordered actions → owning User,
                              and executes each action (records a Task
                              row + zapRun.status per run)
```

The outbox pattern decouples "record that the trigger fired" (a DB write)
from "get it onto Kafka" (a separate, retryable process), so a Kafka hiccup
never loses an incoming webhook.

### Apps and packages

| Path | What it is | Port |
|---|---|---|
| `apps/web` | Next.js frontend — signup/login, Zap builder, dashboard | 3002 |
| `apps/primary-backend` | Express REST API — auth, Zap/trigger/action CRUD | 3000 |
| `apps/hooks` | Webhook catcher — `POST /hooks/catch/:userId/:zapId` records the trigger | 3001 |
| `apps/processor` | Outbox → Kafka relay (no HTTP server) | — |
| `apps/worker` | Kafka consumer that runs each Zap's actions, sends real email via SMTP | — |
| `packages/db` | Shared Prisma schema + client, published as `@repo/db` | — |

Only the **email** action is implemented. Any other action type is logged
and skipped rather than crashing the run.

## Prerequisites

- Node.js 18+
- npm (workspaces)
- Docker (for local Postgres + Kafka)

## Setup

```bash
npm install

# start local Postgres + Kafka
docker compose up -d

# copy env templates and fill in real values (see table below)
cp packages/db/.env.example packages/db/.env
cp apps/primary-backend/.env.example apps/primary-backend/.env
cp apps/worker/.env.example apps/worker/.env
cp apps/processor/.env.example apps/processor/.env

# create tables + seed the "webhook" trigger and "email" action
cd packages/db
npx prisma migrate deploy
npx prisma db seed
cd ../..

# run everything (web, primary-backend, hooks, processor, worker) in parallel
npm run dev
```

Then open **http://localhost:3002**.

### Environment variables

`packages/db/.env`

| Var | Meaning |
|---|---|
| `DATABASE_URL` | Postgres connection string. Loaded centrally by `@repo/db` regardless of which app runs it. |

`apps/primary-backend/.env`

| Var | Meaning |
|---|---|
| `JWT_PASSWORD` | Secret used to sign/verify auth tokens. Use a long random string. |

`apps/worker/.env`

| Var | Meaning |
|---|---|
| `KAFKA_BROKERS` | Comma-separated Kafka broker list, e.g. `localhost:9092`. |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | Your mail server. Gmail: `smtp.gmail.com`, `587`, `false`. |
| `SMTP_USER` / `SMTP_PASS` | SMTP login. For Gmail, generate an [App Password](https://myaccount.google.com/apppasswords) — not your real password. |
| `SMTP_FROM` | The "From" header on sent emails. |

`apps/processor/.env`

| Var | Meaning |
|---|---|
| `KAFKA_BROKERS` | Same as the worker's. |

## Using it

1. Sign up / log in at `http://localhost:3002`.
2. Click **Create**, pick the **webhook** trigger, add an **email** action.
   Fill in **To** (leave blank to email yourself), **Subject**, and **Body**
   — both support `{{field}}` placeholders that get filled in from whatever
   JSON the webhook receives.
3. Click **Publish**. Your dashboard now shows a **Webhook URL** for that Zap.
4. Fire it from anywhere:
   ```bash
   curl -X POST http://localhost:3001/hooks/catch/<userId>/<zapId> \
     -H "Content-Type: application/json" \
     -d '{"name": "Bob"}'
   ```
5. Within a few seconds the worker picks it up off Kafka and sends the email.

## API reference (primary-backend)

| Method & path | Auth | Body |
|---|---|---|
| `POST /api/v1/user/signup` | — | `{ username, password, name }` |
| `POST /api/v1/user/signin` | — | `{ username, password }` → `{ token }` |
| `GET /api/v1/user` | Bearer token in `Authorization` header | — |
| `GET /api/v1/trigger/available` | — | — |
| `GET /api/v1/action/available` | — | — |
| `POST /api/v1/zap` | ✓ | `{ AvailableTriggerId, triggerMetadata, action: [{ AvailableActionId, actionMetadata }] }` |
| `GET /api/v1/zap` | ✓ | — |
| `GET /api/v1/zap/zapId?zapId=...` | ✓ | — |

## Common commands

```bash
npm run dev          # turbo: run every app's dev script in parallel
npm run build         # turbo: build every app
npm run check-types   # turbo: tsc --noEmit across the whole repo
npm run lint           # turbo: eslint across the whole repo

# packages/db
npx prisma studio                 # browse the DB
npx prisma migrate dev --name x   # create + apply a migration
npx prisma db seed                # re-run the seed script
```

## Tech stack

Turborepo · TypeScript · Next.js · Express · Prisma + PostgreSQL · KafkaJS ·
Nodemailer · bcryptjs · JWT · Zod · Docker Compose

## Notes

- The Postgres password in `docker-compose.yml` is a local-dev-only
  placeholder — it's not reachable outside your machine and isn't meant to
  be a real secret.
- No `.env` files are committed; only `.env.example` templates are.
