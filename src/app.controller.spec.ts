import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
describe('AppController', () => {
  let appController: AppController;
  const hostname = process.env.HOSTNAME || 'localhost' || require('os').hostname();
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe(`Hello World! Hostname: ${hostname}`);
    });
    it('Hello Microservice"', () => {
      expect(appController.getMs()).toBe(`Hello Microservice From Hostname: ${hostname}`);
    });
  });
});
