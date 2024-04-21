import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StressService } from './app.StressService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private stressService:StressService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/ms')
  getMs(): string {
    return this.appService.getMs();
  }
    @Get('cpu')
  stressCPU() {
    this.stressService.stressCPU();
    return 'CPU stress test started.';
  }

  @Get('memory')
  stressMemory() {
    this.stressService.stressMemory();
    return 'Memory stress test started.';
  }
}
