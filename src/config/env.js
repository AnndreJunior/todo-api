import { z } from 'zod'

const envSchema = z.object({
  PORT: z.string().min(4),
})

const env = envSchema.parse(process.env)

export { env }
