import { Router } from 'express';
import { createDB } from '../db.js';

const completeTasks = new Router();

completeTasks.patch('/tasks/:id/complete', (req, res) => {
  const { id } = req.params;
  const today = new Date();

  createDB('tasks').where({ id }).first().then((task) => {
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    } else {
      if (task.finished === 1) {
        return res.status(400).json({ message: 'Tarefa já foi concluída' });
      }
    }

    return createDB('tasks').where({ id }).update({ updated_at: today.toLocaleString('pt-BR'), completed_at: today.toLocaleString('pt-BR'), finished: true });
  }).then(() => {
    console.log('Sucesso');
    return res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
  }).catch((error) => {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar a tarefa' });
  });

});

export { completeTasks };