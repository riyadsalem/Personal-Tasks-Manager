import Task from './tasks.entity';
import { AppDataSource } from '../../index';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

export class TasksController {
  // Method for the get route
  public async getAll(
    req: Request,
    res: Response,
  ): Promise<Response> {
    let allTasks: Task[];

    try {
      allTasks = await AppDataSource.getRepository(
        Task,
      ).find({
        order: {
          date: 'ASC',
        },
      });

      // Convert the tasks instance to an array of objects
      /*
      [
        task {},
        task {}
      ]
      TO
      [
        {},
        {}
      ]
      */
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);
    } catch (errors) {
      return res
        .json({ error: 'Internal Server Error' })
        .status(500);
    }
  }

  // Method for the post route
  public async create(req: Request, res: Response) {
    console.log('This is Create Method');
  }
}

export const taskController = new TasksController();
