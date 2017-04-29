import {Injectable, Injector} from '@angular/core';
import {Board} from "./board";
import {Card} from "./card";
import {Charms} from "./shared/model/cards/charms";
import {Transfiguration} from "./shared/model/cards/transfiguration";
import {Player} from "./player";

@Injectable()
export class CardFactoryService {

  constructor(private injector: Injector) { }

  create(cardName: string, cardId: number, player: Player): Card {
    switch (cardName) {
      case 'Charms':
        return new Charms(player, cardId, this.injector);
      case 'Transfiguration':
        return new Transfiguration(player, cardId, this.injector);
      default:
        break;
    }
  }

}
