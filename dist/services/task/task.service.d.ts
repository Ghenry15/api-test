import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
export declare class TaskService {
    findAll(): {
        id: number;
        description: string;
        isDone: boolean;
    }[];
    findOne(id: number): ITask;
    createTask(taskDTO: TaskDTO): Promise<TaskDTO>;
}
