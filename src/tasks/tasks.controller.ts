/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';


import { Task } from './interfaces/task';
import { TasksService } from './tasks.service';




@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TasksService){}


    @Get()
    getTasks(): Promise<Task[]>{
        //return this.taskService.getTasks() ;
        return null;
    };

    @Get(':id')
    getTask(@Param('id') id: string){
        //return this.taskService.getTask(id);
        return null;
    }




}
