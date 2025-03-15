import { z } from 'zod'

export const TodoFormSchema = z.object({
  title: z.string().min(3),
})
