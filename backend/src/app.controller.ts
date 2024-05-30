import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('Main')
  @ApiOkResponse({ description: 'Hello World!' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
