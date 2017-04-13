import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WebSocketService} from './web-socket.service';
import { FakeComponentComponent } from './fake-component/fake-component.component';
import {MessageService} from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WebSocketService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
