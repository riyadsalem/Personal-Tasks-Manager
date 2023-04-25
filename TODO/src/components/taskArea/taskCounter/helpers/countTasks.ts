import { ITaskApi } from '../../interfaces/ITaskAPI';
import { TaskCounterStatusType } from '../interface/ITaskCounter';

export const countTasks = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }

  const totalTasks = tasks.filter((task) => {
    return task.status === status;
  });

  return totalTasks.length;
};
