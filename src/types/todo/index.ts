import { z } from 'zod'

export const todoSchema = z.object({
    id: z.string()
        .length(25),
    text: z.string()
        .min(1, 'Todo tidak boleh kosong')
        .min(3, 'Todo minimal 3 huruf')
        .max(100),
    status: z.boolean()
        .default(false),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const createTodoSchema = todoSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
});

export const updateTodoSchema = todoSchema.partial().omit({
    id: true,
    text: true,
    status: true,
    createdAt: true,
    updatedAt: true
});

export type Todo = z.infer<typeof todoSchema>;
export type CreateTodoInput = z.infer<typeof createTodoSchema>;
export type UpdateTodoInput = z.infer<typeof updateTodoSchema>;