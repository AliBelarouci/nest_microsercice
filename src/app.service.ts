import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class AppService {
  private readonly version: string;
    constructor() {
    // Read package.json file synchronously
    const packageJson = fs.readFileSync('package.json', 'utf8');
    // Parse package.json content as JSON
    const { version } = JSON.parse(packageJson);
    // Assign the version to the class property
    this.version = version;
  }
  getHello(): string {
    return `Hello World! V ${this.version}`;
  }
}
