import { Component } from '@angular/core';

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
                <input matInput placeholder="Email">
            </mat-form-field>
            <mat-form-field class="example-full-width">
            <input matInput placeholder="password" type="password">
            </mat-form-field>
            <button mat-raised-button>Register</button>
        </form> 
    </mat-card-content>
  </mat-card>
  `,
})
export class RegisterComponent {

}