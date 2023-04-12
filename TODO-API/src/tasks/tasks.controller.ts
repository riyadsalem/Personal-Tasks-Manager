import { Request } from 'express';
import Task from './tasks.entity';
import { AppDataSource } from '../../index';

export class TasksController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}
  // Method for the get route
  public async getAll(
    req: Request,
    res: Response,
  ): Promise<Task[]> {
    // Declare a variable to hold all tasks
    let allTasks: Task[];

    // Fetch all tasks using the repository
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const taskController = new TasksController();
