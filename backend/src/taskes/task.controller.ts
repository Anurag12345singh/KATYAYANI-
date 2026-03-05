import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service.ts';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() body: any) {
    return this.tasksService.create(body);
  }

  @Get()
  getAll() {
    return this.tasksService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.tasksService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}