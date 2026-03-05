import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module.ts';
import { UsersModule } from './users/users.module.ts';
import { TasksModule } from './tasks/tasks.module.ts';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/katyayani'),
    AuthModule,
    UsersModule,
    TasksModule,
  ],
})
export class AppModule {}