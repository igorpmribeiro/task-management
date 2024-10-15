import express from 'express';
import { routes } from './routes/index.js';
import newMiddleware from './middlewares/createTaskMiddleware.js';



const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});