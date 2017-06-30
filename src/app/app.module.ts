import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToolTipModule} from 'angular2-tooltip'

import { AppComponent } from './app.component';
import {WebSocketService} from './shared/services/web-socket.service';
import { FakeComponentComponent } from './fake-component/fake-component.component';
import {MessageService} from './shared/services/message.service';
import { GameListComponent } from './game-list/game-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule, MdDialog} from "@angular/material";
import {UsernameService} from "./shared/services/username.service";
import { UsernameFormComponent } from './username-form/username-form.component';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { ChooseDeckComponent } from './choose-deck/choose-deck.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import {UsernameGuard} from "./username.guard";
import {CardFactoryService} from "./card-factory.service";
import { DiscardPileComponent } from './discard-pile/discard-pile.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { CardComponent } from './card/card.component';
import { DeckComponent } from './deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponentComponent,
    GameListComponent,
    UsernameFormComponent,
    SettingsComponent,
    GameComponent,
    ChooseDeckComponent,
    AuthenticatedComponent,
    DiscardPileComponent,
    CardComponent,
    DeckComponent
  ],
  entryComponents: [
    SettingsComponent,
    ChooseDeckComponent,
    DiscardPileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    ToolTipModule,
    FlexLayoutModule
  ],
  providers: [
    WebSocketService,
    MessageService,
    UsernameService,
    MdDialog,
    UsernameGuard,
    CardFactoryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
