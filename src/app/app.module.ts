import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WebSocketService} from './shared/services/web-socket.service';
import { FakeComponentComponent } from './fake-component/fake-component.component';
import {MessageService} from './shared/services/message.service';
import { GameListComponent } from './game-list/game-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";
import {UsernameService} from "./shared/services/username.service";
import { UsernameFormComponent } from './username-form/username-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponentComponent,
    GameListComponent,
    UsernameFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    WebSocketService,
    MessageService,
    UsernameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
