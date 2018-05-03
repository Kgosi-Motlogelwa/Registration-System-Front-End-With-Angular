import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/">SocialApp</button>
    <button mat-button routerLink="/users">Users</button>
    <span style="flex: 1 1 auto"></span>
    <button mat-button *ngIf="!apiService.isAuthenticated" routerLink="/register">Register</button>
    <button mat-button *ngIf="!apiService.isAuthenticated" routerLink="/login">Login</button>
    <button mat-button *ngIf="apiService.isAuthenticated" routerLink="/">Logout</button>

  </mat-toolbar>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(private apiService: ApiService){

  }
}
