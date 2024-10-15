import { Router } from 'express';
import { createDB } from '../db.js';

const indexTasks = new Router();

indexTasks.get('/tasks', (req, res) => {
  createDB.select('*').from('tasks').then((data) => {
    return res.status(200).json(data);
  }).catch((error) => {
    console.error(error);
  }
  );
});

export { indexTasks };