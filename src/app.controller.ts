import {Controller, Get, Post} from '@nestjs/common';
import {ApiExcludeEndpoint} from "@nestjs/swagger";

@Controller()
export class AppController {
  @Get()
  @ApiExcludeEndpoint()
  ok(): string {
    return "ok"
  }
}
