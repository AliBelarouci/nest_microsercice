import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  private hostname = process.env.HOSTNAME || 'localhost' || require('os').hostname();
  constructor() {

  }
  getMs(): string {
    return `Hello Microservice From Hostname: ${this.hostname}`;
  }
  getHello(): string {
    const hostname = process.env.HOSTNAME || 'localhost' || require('os').hostname();
     return `Hello World! Hostname: ${hostname}`;
  }
  
}
