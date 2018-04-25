import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'register',
  template: `
  <mat-card>
    <mat-card-header>
        <mat-card-title>
            <h3>Register Yourself</h3>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form class="example-form">
            <mat-form-field class="example-full-width">
                <input matInput [(ngModel)]="registerData.email" name="email" placeholder="Email" type="email">
            </mat-form-field>
            <br>
            <mat-form-field class="example-full-width">
                <input matInput [(ngModel)]="registerData.password" name="password" placeholder="password" type="Password">
            </mat-form-field>
            <br>
            <mat-form-field class="example-full-width">
                <input matInput [(ngModel)]="registerData.name" name="name" placeholder="name" type="text">
            </mat-form-field>
            <br>
            <mat-form-field style="width: 100%">
                <textarea matInput [(ngModel)]="registerData.description" name="description" placeholder="description"></textarea>
            </mat-form-field>
            <button mat-raised-button (click)="Post()">Register</button>
        </form> 
    </mat-card-content>
  </mat-card>
  `,
})
export class RegisterComponent {
    registerData = {}

    constructor(private apiService: ApiService){}
    Post() {
        this.apiService.sendUserRegistration(this.registerData);
    }
}
