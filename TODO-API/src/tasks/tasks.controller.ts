import Task from './tasks.entity';
import { AppDataSource } from '../../index';

export class TasksController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}
  // Method for the get route
  public async getAll() {
    let allTasks: Task[];

    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
      console.log(allTasks);
    } catch (err) {
      console.log(err);
    }
  }
}

// export const taskController = new TasksController();
