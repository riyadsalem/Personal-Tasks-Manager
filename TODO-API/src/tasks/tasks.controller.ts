import { validationResult } from 'express-validator';
import Task from './tasks.entity';
import { AppDataSource } from '../../index';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

export class TasksController {
  // Method for the get route
  /*constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}*/

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
  public async create(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    //Create a new instance of the Task
    const newTask = new Task();

    // Add the required properties to the Task object
    newTask.title = req.body.title;
    newTask.date = req.body.date;
    newTask.description = req.body.description;
    newTask.priority = req.body.priority;
    newTask.status = req.body.status;

    // Add the new task to the database
    let createdTask: Task;

    try {
      createdTask = await AppDataSource.getRepository(
        Task,
      ).save(newTask);

      // Convert the task instance to an object
      createdTask = instanceToPlain(createdTask) as Task;

      return res.json(createdTask).status(201);
    } catch (errors) {
      return res
        .json({ error: 'Internal Server Error' })
        .status(500);
    }
  }
}

export const taskController = new TasksController();
