/* eslint-disable prettier/prettier */
/* import { Schema } from "mongoose";

export const TaskSchema = new Schema({
    title: String,
    description: String,
    done: Boolean

}) */



import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskSchemaDcto = STask & Document;

@Schema()
export class STask {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(STask);