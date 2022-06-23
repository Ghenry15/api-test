import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { TaskController } from './controllers/task/task.controller';
import { TaskService } from './services/task/task.service';

@Module({
  imports: [TaskModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
