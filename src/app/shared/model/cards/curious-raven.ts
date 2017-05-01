import {Creature} from "./creature";
import {Player} from "../../../player";
import {Injector} from "@angular/core";

export class CuriousRaven extends Creature {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector, 1, 1, 2);
  }

}
