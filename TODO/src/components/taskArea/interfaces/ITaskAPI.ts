import { Priority } from '../../sidebar/createTaskForm/enums/Priority';
import { Status } from '../../sidebar/createTaskForm/enums/Status';

export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
