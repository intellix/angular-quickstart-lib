import { Component } from '@angular/core';
import { LibService } from 'quickstart-lib';

@Component({
  selector: 'demo-app',
  template: `
    <my-lib></my-lib>
    <h3>Meaning is: {{meaning}}</h3>
  `,
})
export class AppComponent {
  meaning: number;
  constructor(libService: LibService) {
    this.meaning = libService.getMeaning();
  }
}
