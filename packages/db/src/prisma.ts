import { config } from "dotenv";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client/index.js"

// Load packages/db/.env regardless of which app's working directory this runs from,
// since DATABASE_URL is a shared concern owned by this package, not the callers.
config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), "..", ".env") });

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set. Add it to packages/db/.env");
}

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };