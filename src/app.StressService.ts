// stress.service.ts
import { Injectable } from '@nestjs/common';
import * as os from 'os';
import * as child_process from 'child_process';

@Injectable()
export class StressService {
  // Function to stress test CPU
  stressCPU() {
    console.log('Starting CPU stress test...');
    const numCPUs = os.cpus().length;
    const childProcesses = [];
    for (let i = 0; i < numCPUs; i++) {
      const child = child_process.fork(__dirname + '/cpu_worker.js');
      childProcesses.push(child);
    }

    // Stop the CPU stress after a certain duration
    setTimeout(() => {
      console.log('Stopping CPU stress test...');
      childProcesses.forEach(child => child.kill());
    }, 30000); // Stress for 30 seconds
  }

  // Function to stress test memory
  stressMemory() {
    console.log('Starting memory stress test...');
    setTimeout(() => {
      const memoryArray = [];
      while (true) {
        memoryArray.push(new Array(1024 * 1024)); // Allocating 1MB of memory
      }
    }, 3000); // Delay for 3 seconds before starting the memory stress
  }
}
