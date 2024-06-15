import { prisma } from '../config/prisma.js'

/**
 * @param {import('express').Response} res
 */
export async function getAllTodosController(_, res) {
  const todos = await prisma.todo.findMany()
  return res.json(todos)
}
