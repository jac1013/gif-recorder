import { Injectable } from '@angular/core';
import { ElectronService } from '../providers/electron.service';

@Injectable()
export class CommandRunner {

  childProcess: any;

  constructor(private electronService: ElectronService) {
    if (this.electronService.isElectron()) {
      this.childProcess = window.require('child_process');
    }
  }

  run() {
    const ls = this.childProcess.spawn('ls', ['-lh', '/usr']);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
  }
}
