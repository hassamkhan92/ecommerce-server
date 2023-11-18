import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

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
  createUser() {
    return {};
  }

  //PUT/users/:id
  @Put(':id')
  updateUser(@Param('id') id: number) {
    return { id };
  }

  //DELETE/users/:id
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return { id };
  }
}
