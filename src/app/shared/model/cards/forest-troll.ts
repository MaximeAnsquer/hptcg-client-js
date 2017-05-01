import {Creature} from "./creature";
import {Player} from "../../../player";
import {Injector} from "@angular/core";

export class ForestTroll extends Creature {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector, 2, 3, 2);
    this.lessonsToDiscard = 1;
  }

}
