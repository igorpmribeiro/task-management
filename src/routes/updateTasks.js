import { Router } from 'express';
import { createDB } from '../db.js';
import updateMiddleware from '../middlewares/updateTaskMiddleware.js';

const updateTasks = new Router();

updateTasks.put('/tasks/:id', updateMiddleware(), (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  createDB('tasks').where({ id }).first().then((task) => {
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    return createDB('tasks').where({ id }).update({ updated_at: new Date().toLocaleString('pt-BR'), title, description });
  }).then(() => {
    console.log('Sucesso');
    return res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
  }).catch((error) => {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar a tarefa' });
  });
});

export { updateTasks };
