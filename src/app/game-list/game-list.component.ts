import { Component, OnInit } from '@angular/core';
import {MessageService} from "../shared/services/message.service";
import {Game} from "../shared/model/game";
import {UsernameService} from "../shared/services/username.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private messageService: MessageService,
    private usernameService: UsernameService) {}

  ngOnInit() {
    this.messageService.messages.subscribe(message => {
      switch(message['type']) {
        case 'game-list':
          this.games = message['value'];
          break;
        case 'add-game':
          this.games.push(message['value']);
          break;
        default:
          break;
      }
    });
  }

  createGame() {
    this.messageService.messages.next({
      type : 'create-game',
      username: this.usernameService.getUsername()
    });
  }

}
