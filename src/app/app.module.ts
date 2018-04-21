import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';

const routes = [
  {path:"register", component:RegisterComponent}
]

@NgModule({
  declarations: [ 
    AppComponent,
    MessagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
