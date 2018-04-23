import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'profile',
  template: `
  <mat-card>
    <mat-card-header>
        <mat-card-title>
            <h3>Profile </h3>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <mat-list>
        <mat-list-item>Name: Awais</mat-list-item>
    </mat-list>
    </mat-card-content>
  </mat-card>
  `,
})
export class ProfileComponent {
    constructor(private apiService: ApiService){}
}
