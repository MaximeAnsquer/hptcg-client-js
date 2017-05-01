import {Injectable, Injector} from '@angular/core';
import {Board} from "./board";
import {Card} from "./card";
import {Charms} from "./shared/model/cards/charms";
import {Transfiguration} from "./shared/model/cards/transfiguration";
import {Player} from "./player";
import {Epoximise} from "./shared/model/cards/epoximise";
import {CareOfMagicalCreatures} from "./shared/model/cards/care-of-magical-creatures";

@Injectable()
export class CardFactoryService {

  constructor(private injector: Injector) { }

  create(cardName: string, cardId: number, player: Player): Card {
    switch (cardName) {
      case 'Charms':
        return new Charms(player, cardId, this.injector);
      case 'Transfiguration':
        return new Transfiguration(player, cardId, this.injector);
      case 'Epoximise':
        return new Epoximise(player, cardId, this.injector);
      case 'CareOfMagicalCreatures':
        return new CareOfMagicalCreatures(player, cardId, this.injector);
      default:
        break;
    }
  }

}
