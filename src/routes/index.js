import { Router } from 'express';
import {indexTasks} from './indexTasks.js';
import { createTasks } from './createTasks.js';
import { updateTasks } from './updateTasks.js';
import { deleteTasks } from './deleteTasks.js';
import { completeTasks } from './completeTasks.js';


const routes = new Router();

routes.use("/", indexTasks);
routes.use("/", createTasks);
routes.use("/", updateTasks);
routes.use("/", deleteTasks);
routes.use("/", completeTasks);

export { routes };