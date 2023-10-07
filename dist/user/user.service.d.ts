import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(createUserDto: any): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: any): Promise<User>;
    remove(id: number): string;
}
