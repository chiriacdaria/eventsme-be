import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UpdateUserCommand } from 'src/user/application/command/update-user.command';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserCommand } from 'src/user/application/command/delete-user.command';
import { JwtAuthGuard } from 'src/core/authentication/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Patch(':id')
  async update(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.commandBus.execute(
      new UpdateUserCommand(userId, updateUserDto),
    );
  }

  @Delete(':id')
  async delete(@Param('id') userId: string) {
    return await this.commandBus.execute(new DeleteUserCommand(userId));
  }
}
