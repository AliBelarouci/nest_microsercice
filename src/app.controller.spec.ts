import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as fs from 'fs';
describe('AppController', () => {
  let appController: AppController;
  let version: string;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
        // Read package.json to get the version
    const packageJson = fs.readFileSync('package.json', 'utf8');
    version = JSON.parse(packageJson).version;
  });

  describe('root', () => {
      it('should return "Hello World!" with version', () => {
      // Use the version retrieved from package.json in the assertion
      expect(appController.getHello()).toBe('Hello World! V ' + version);
    });
  });
});
