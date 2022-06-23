import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ITask } from 'src/services/task/task.interface';
import { TaskService } from 'src/services/task/task.service';
import { TaskDTO } from '../../services/task/dto/task.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {

    }
    @Get()
    async findAll() {
        return this.taskService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.taskService.findOne(id);
    }

    @Post()
    async addTask(@Body() taskDTO: TaskDTO) {
        return this.taskService.createTask(taskDTO)
    }
}
