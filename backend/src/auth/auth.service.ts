import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService) {}

  async register(data: any) {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.usersService.create({
      ...data,
      password: hashedPassword,
    });

    return user;
  }

  async login(data: any) {

    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      return { message: "User not found" };
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      return { message: "Invalid password" };
    }

    return {
      message: "Login successful",
      user,
    };
  }
}