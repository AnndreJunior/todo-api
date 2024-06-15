import { z } from 'zod'
import { prisma } from '../config/prisma.js'

const deleteTodoSchema = z.object({
  id: z.string(),
})

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function deleteTodoController(req, res) {
  const validationResult = deleteTodoSchema.safeParse(req.params)
  if (!validationResult.success)
    return res.status(400).json(validationResult.error.issues)
  await prisma.todo.delete({
    where: {
      id: Number(req.params.id),
    },
  })
  return res.status(204).send()
}
