import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Logger, Repository } from 'typeorm';

@Injectable()
export class UserService {
  protected logger: Logger;

  constructor(
    @InjectRepository(User)
    readonly userRepository: Repository<User>,
  ) {}

  async createUser(email: string, contactNumber: string) {
    await this.userRepository.insert({
      email,
      contactNumber,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async find(userId: number): Promise<User> {
    return await this.userRepository.findOneBy({
      id: userId,
    });
  }
}
