/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose'
//import { STask, TaskSchema } from './tasks/schemas/task.schema';

@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb+srv://mongo_admin:will5933@cluster0.dnuzc.mongodb.net/Tasks?retryWrites=true&w=majority')],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
