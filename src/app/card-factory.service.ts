import {Injectable, Injector} from '@angular/core';
import {Board} from "./board";
import {Card} from "./card";
import {Charms} from "./shared/model/cards/charms";
import {Transfiguration} from "./shared/model/cards/transfiguration";

@Injectable()
export class CardFactoryService {

  constructor(private injector: Injector) { }

  create(cardName: string, cardId: number, board: Board): Card {
    switch (cardName) {
      case 'Charms':
        return new Charms(board, cardId, this.injector);
      case 'Transfiguration':
        return new Transfiguration(board, cardId, this.injector);
      default:
        break;
    }
  }

}
