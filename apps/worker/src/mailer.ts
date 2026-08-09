import nodemailer, { type Transporter } from "nodemailer";

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
    if (!transporter) {
        transporter = nodemailer.createTransport({
            host: requireEnv("SMTP_HOST"),
            port: Number(process.env.SMTP_PORT ?? 587),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: requireEnv("SMTP_USER"),
                pass: requireEnv("SMTP_PASS"),
            },
        });
    }
    return transporter;
}

export async function sendEmail(params: { to: string; subject: string; text: string }): Promise<void> {
    const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
    const info = await getTransporter().sendMail({
        from,
        to: params.to,
        subject: params.subject,
        text: params.text,
    });

    // Non-null only for Ethereal test accounts; harmless no-op against real SMTP providers.
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
        console.log(`Email preview: ${previewUrl}`);
    }
}
