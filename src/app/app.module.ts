import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [ 
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule, HttpModule, MatButtonModule, MatCardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
