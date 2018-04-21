import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'messages',
  template: `<div *ngFor="let msg of apiService.messages">
                <mat-card>{{msg.message}}</mat-card>
            </div>`,
})
export class MessagesComponent {
  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getMessage();
  }

}