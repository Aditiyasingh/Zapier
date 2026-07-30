import {z} from 'zod';

export const SignupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    name: z.string().min(2, "Name must be at least 2 characters long")
})
export const SigninSchema = z.object({
    username :z.string(),
    password: z.string()
})

export const ZapCreateSchema = z.object({
    AvailableTriggerId: z.string(),
    triggerMetadata: z.any().optional(),
    action: z.array(z.object({
        AvailableActionId: z.string(),
        actionMetadata: z.any().optional()
    }))
})