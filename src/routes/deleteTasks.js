import { Router } from 'express';
import { createDB } from '../db.js';

const deleteTasks = new Router();

deleteTasks.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  createDB('tasks').where({ id }).del().then(() => {
    return res.status(200).json({ message: `Tarefa ${id} deletada com sucesso` });
  }).catch((error) => {
    console.error(error);
  });

});

export { deleteTasks };