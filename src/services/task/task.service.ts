import { Injectable } from '@nestjs/common';
import { task } from 'src/constanst/task';
import { TaskDTO } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {

    findAll() {
        return task;
    }

    findOne(id: number): ITask {
        return task.find((t) => t.id === id);
    }
    async createTask(taskDTO: TaskDTO): Promise<TaskDTO> {
        const newTask = {
            id: Math.abs( Math.ceil( Math.random() )  ) ,
            ...taskDTO
        }
        task.push(newTask);
        return newTask;
    }
}
