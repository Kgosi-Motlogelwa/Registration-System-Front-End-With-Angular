import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/">SocialApp</button>
    <button mat-button routerLink="/users">Users</button>
    <span style="flex: 1 1 auto"></span>
    <button mat-button routerLink="/register">Register</button>
    <button mat-button routerLink="/login">Login</button>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}
