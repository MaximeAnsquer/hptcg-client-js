import {Card} from "../../../card";
import {Injector} from "@angular/core";
import {Player} from "../../../player";

export class Creature extends Card {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector);
  }

}
