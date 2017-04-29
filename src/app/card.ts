import {MessageService} from "./shared/services/message.service";
import {Injector} from "@angular/core";
import {Player} from "./player";
export abstract class Card {

  player: Player;
  id: number;
  name: string;
  imagePath: string;

  protected messageService: MessageService;

  constructor(player: Player, id: number, injector: Injector) {
    this.messageService = injector.get(MessageService);
    this.id = id;
    this.player = player;
    this.imagePath = "assets/images/" + this.constructor.name + ".jpg";
    this.name = this.constructor.name;
  }

  play() {
    this.messageService.messages.next({
      type: 'play-card-from-hand',
      cardName: this.name,
      cardId: this.id
    });
  }

  opponentPlays() {

  }
}
