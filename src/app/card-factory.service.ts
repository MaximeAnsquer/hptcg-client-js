import {Injectable, Injector} from '@angular/core';
import {Board} from "./board";
import {Card} from "./card";
import {Charms} from "./shared/model/cards/charms";
import {Transfiguration} from "./shared/model/cards/transfiguration";
import {Player} from "./player";
import {Epoximise} from "./shared/model/cards/epoximise";
import {CareOfMagicalCreatures} from "./shared/model/cards/care-of-magical-creatures";
import {Avifors} from "./shared/model/cards/avifors";
import {CuriousRaven} from "./shared/model/cards/curious-raven";
import {ForestTroll} from "./shared/model/cards/forest-troll";
import {ViciousWolf} from "./shared/model/cards/vicious-wolf";

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
      case 'Avifors':
        return new Avifors(player, cardId, this.injector);
      case 'CuriousRaven':
        return new CuriousRaven(player, cardId, this.injector);
      case 'ForestTroll':
        return new ForestTroll(player, cardId, this.injector);
      case 'ViciousWolf':
        return new ViciousWolf(player, cardId, this.injector);
      default:
        break;
    }
  }

}
