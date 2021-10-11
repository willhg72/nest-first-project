/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { STask, TaskSchema } from './schemas/task.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: STask.name , schema: TaskSchema }
    ])],
    controllers: [TasksController],
    providers:[TasksService]
})
export class TasksModule {}
