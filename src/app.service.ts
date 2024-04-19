import { Injectable } from '@nestjs/common';
import * as os from 'os';
@Injectable()
export class AppService {
  getHello(): string {
    const hostname = os.hostname();
     return `Hello World! Hostname: ${hostname}`;
  }
}
