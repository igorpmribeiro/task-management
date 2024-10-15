import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { createDB } from '../db.js';
import newMiddleware from '../middlewares/createTaskMiddleware.js';


const createTasks = new Router();

createTasks.post('/tasks', newMiddleware(), (req, res) => {
  const { title, description } = req.body;
  const id = uuid();

  const today = new Date();
  createDB('tasks').insert({
    id,
    title,
    description,
    created_at: today.toLocaleString('pt-BR'),
  }).then(() => {
    return res.status(201).json({id, title, description, message: 'Tarefa criada com sucesso' });
  }).catch((error) => {
    console.error(error);
  });

});

export { createTasks };