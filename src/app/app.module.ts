import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WebSocketService} from './web-socket.service';
import { FakeComponentComponent } from './fake-component/fake-component.component';
import {MessageService} from './message.service';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponentComponent,
    GameListComponent
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
