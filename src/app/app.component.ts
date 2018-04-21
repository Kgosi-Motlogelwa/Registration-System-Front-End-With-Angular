import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    Registertation App
    <span style="flex: 1 1 auto"></span>
    <button mat-button>Register</button>
  </mat-toolbar>
  `,
})
export class AppComponent {

}
