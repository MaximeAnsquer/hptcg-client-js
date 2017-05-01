import {Creature} from "./creature";
import {Player} from "../../../player";
import {Injector} from "@angular/core";

export class ViciousWolf extends Creature {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector, 3, 3, 6);
  }

}
