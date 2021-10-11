/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskSchemaDcto } from './schemas/task.schema'; 
//import { Task } from './interfaces/task';


@Injectable()
export class TasksService {

 constructor(@InjectModel('STask') private taskModel: Model<TaskSchemaDcto>){}
       
/*     async getTasks(){
        return await this.taskModel.find();
    }
    async getTask(id: string){
        return await this.taskModel.findById(id)
    } */
}




