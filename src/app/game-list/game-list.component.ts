import { Component, OnInit } from '@angular/core';
import {MessageService} from "../shared/services/message.service";
import {Game} from "../shared/model/game";
import {UsernameService} from "../shared/services/username.service";
import {MdDialog} from "@angular/material";
import {ChooseDeckComponent} from "../choose-deck/choose-deck.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  yourGameId: number;

  constructor(
    private messageService: MessageService,
    private usernameService: UsernameService,
    private dialog: MdDialog,
    private router: Router) {}

  ngOnInit() {
    this.messageService.messages.subscribe(message => {
      switch(message['type']) {
        case 'game-list':
          this.games = message['value'];
          break;
        case 'add-game':
          this.games.push(message['value']);
          break;
        case 'game-id':
          this.yourGameId = message['value'];
          break;
        case 'game-joined':
          this.router.navigate(['/game']);
          break;
        default:
          break;
      }
    });
  }

  chooseDeckForCreatingGame() {
    this.dialog.open(ChooseDeckComponent, {data: {
      action: 'creating-game'
    }});
  }

  isOwnGame(id: number) {
    return id === this.yourGameId;
  }

  chooseDeckForJoiningGame(id: number) {
    this.dialog.open(ChooseDeckComponent, {data: {
      id: id,
      action: 'joining-game'
    }});
  }

}
