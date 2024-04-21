import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { StressService } from './app.StressService';
@Module({
  imports: [PrometheusModule.register()],
  controllers: [AppController],
  providers: [AppService,StressService],
})
export class AppModule {}
