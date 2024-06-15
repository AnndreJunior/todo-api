import { z } from 'zod'
import { prisma } from '../config/prisma.js'

const createTodoSchema = z.object({
  title: z.string().max(80),
  description: z.string().max(80).optional(),
})

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function createTodoController(req, res) {
  var validationResult = createTodoSchema.safeParse(req.body)

  if (!validationResult.success)
    return res.status(400).json(validationResult.error.issues)
  const todo = await prisma.todo.create({
    data: {
      title: req.body.title,
      description: req.body.description,
    },
  })
  return res.status(201).json(todo)
}
