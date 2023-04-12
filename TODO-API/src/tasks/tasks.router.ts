import { Router, Request, Response } from 'express';
// import { taskController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// tasksRouter.get('/tasks', taskController.getAll);
