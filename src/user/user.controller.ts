import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async list() {
        return this.userService.list();
    }

    @Get(":id")
    async element(@Param("id") id: number) {
        return this.userService.get(id)
    }

    @Post()
    async create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() body: UpdateUserDto) {
        return this.userService.update(id, body);
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.userService.delete(id);
    }
}
