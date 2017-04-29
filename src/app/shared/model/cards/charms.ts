import {Lesson} from "./lesson";
import {Board} from "../../../board";
import {Injector} from "@angular/core";
import {Player} from "../../../player";
export class Charms extends Lesson {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector);
  }

}
