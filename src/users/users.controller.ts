import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  // GET/users
  @Get()
  getUsers(@Query('status') status: string) {
    return [{ status }];
  }

  // GET/users/id
  @Get(':id')
  getSingleUser(@Param('id') id: number) {
    return {
      id,
    };
  }

  // POST/users
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      id: createUserDto.id,
    };
  }

  //PUT/users/:id
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return { id: updateUserDto.id };
  }

  //DELETE/users/:id
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return { id };
  }
}
