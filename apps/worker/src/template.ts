// Fills {{field}} / {{nested.field}} placeholders from the trigger's payload,
// e.g. subject "New signup: {{name}}" + payload {name: "Bob"} -> "New signup: Bob"
export function interpolate(template: string, data: unknown): string {
    return template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_match, path: string) => {
        const value = path
            .split(".")
            .reduce<unknown>((acc, key) => (acc && typeof acc === "object" ? (acc as Record<string, unknown>)[key] : undefined), data);
        return value === undefined || value === null ? "" : String(value);
    });
}

export function asRecord(value: unknown): Record<string, unknown> {
    if (value && typeof value === "object" && !Array.isArray(value)) {
        return value as Record<string, unknown>;
    }
    return {};
}
