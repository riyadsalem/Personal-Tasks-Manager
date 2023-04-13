import { Router } from 'express';
import { taskController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', taskController.getAll);
