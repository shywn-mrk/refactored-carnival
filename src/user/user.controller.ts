import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from './models/user.interface'

@Controller('user')
export class UserController {

  constructor(private userServic: UserService) {}

  @Post()
  create(@Body() user: User): Observable<User> {
    return this.userServic.create(user)
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<User> {
    return this.userServic.findOne(Number(id))
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.userServic.findAll()
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.userServic.deleteOne(Number(id))
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
    return this.userServic.updateOne(Number(id), user)
  }
}
