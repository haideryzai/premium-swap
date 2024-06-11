import { Injectable } from '@nestjs/common';
import { successResponse } from './utils/responsesUtil';

@Injectable()
export class AppService {
  getHello(): any {
    return successResponse({}, 'Hello World!', 200);
  }
}
