import {Spell} from "./spell";
import {Player} from "../../../player";
import {Injector} from "@angular/core";
import {LessonType} from "../lesson-type";

export class Epoximise extends Spell {

  constructor(player: Player, id: number, injector: Injector, lessonType: LessonType, cost: number) {
    super(player, id, injector, lessonType, cost);
  }

}
