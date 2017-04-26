import {Board} from "./board";
import {MessageService} from "./shared/services/message.service";
import {Injector} from "@angular/core";
export abstract class Card {

  board: Board;
  id: number;
  name: string;
  imagePath: string;

  protected messageService: MessageService;

  constructor(board: Board, id: number, injector: Injector) {
    this.messageService = injector.get(MessageService);
    this.id = id;
    this.board = board;
    this.imagePath = "assets/images/" + this.constructor.name + ".jpg";
  }

  play() {
    this.messageService.messages.next({
      type: 'play-card',
      cardName: this.name,
      cardId: this.id
    });
  }

  opponentPlays() {

  }

}
