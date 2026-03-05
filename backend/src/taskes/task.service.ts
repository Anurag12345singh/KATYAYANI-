import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';

@Injectable()
export class TasksService {

  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>,
  ) {}

  async create(taskData: any) {
    const task = new this.taskModel(taskData);
    return task.save();
  }

  async findAll() {
    return this.taskModel.find();
  }

  async update(id: string, data: any) {
    return this.taskModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}