import { Router, Request, Response } from 'express';
// import { taskController } from './tasks.controller';
import { TasksController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', (req: Request, res: Response) => {
  const taskController = new TasksController();
  taskController.getAll();
});

// tasksRouter.get('/tasks', taskController.getAll);
