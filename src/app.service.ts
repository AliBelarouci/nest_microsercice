import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    const hostname = process.env.HOSTNAME || 'localhost' || require('os').hostname();
     return `Hello World! Hostname: ${hostname}`;
  }
}
