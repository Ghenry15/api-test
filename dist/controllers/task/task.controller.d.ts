import { ITask } from 'src/services/task/task.interface';
import { TaskService } from 'src/services/task/task.service';
import { TaskDTO } from '../../services/task/dto/task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): Promise<{
        id: number;
        description: string;
        isDone: boolean;
    }[]>;
    findOne(id: number): ITask;
    addTask(taskDTO: TaskDTO): Promise<TaskDTO>;
}
