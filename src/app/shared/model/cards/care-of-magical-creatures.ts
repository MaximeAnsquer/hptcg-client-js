import {Lesson} from "./lesson";
import {LessonType} from "../lesson-type";
import {Injector} from "@angular/core";
import {Player} from "../../../player";

export class CareOfMagicalCreatures extends Lesson {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector);
    this.lessonType = LessonType.CareOfMagicalCreatures;
  }

}
