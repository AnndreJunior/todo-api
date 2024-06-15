import { Router } from 'express'
import { getAllTodosController } from '../controllers/get-all-todos-controller.js'
import { createTodoController } from '../controllers/create-todo-controller.js'
import { deleteTodoController } from '../controllers/delete-todo-controller.js'

const router = Router()

router.get('/hello-world', (_, res) => res.send('Hello World'))

router.get('', getAllTodosController)
router.post('', createTodoController)
router.delete('/:id', deleteTodoController)

export { router }
