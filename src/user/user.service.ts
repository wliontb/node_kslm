import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async create(createUserDto: any) {
    const user = this.userRepo.create();
    user.kpoint = createUserDto.kpoint;
    user.username = createUserDto.username;

    return await this.userRepo.save(user);
  }

  async findAll() {
    return await this.userRepo.find()
  }

  async findOne(id: number) {
    return await this.userRepo.findOne({
      where: {
        id
      }
    })
  }

  async update(id: number, updateUserDto: any) {
    const user = await this.userRepo.findOne({
      where: {
        id
      }
    })

    user.username = updateUserDto.username;
    user.kpoint = updateUserDto.kpoint;

    return await this.userRepo.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
