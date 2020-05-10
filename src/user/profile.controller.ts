import {Controller, Get, NotFoundException, Param} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly userService: UserService) {
  }
  
  @Get('/:username')
  public async findProfile(@Param('username') username: string) {
    const user = await this.userService.findByUsername(username);
    if (!user) {
      throw new NotFoundException();
    }
    return {profile: user};
  }
}
