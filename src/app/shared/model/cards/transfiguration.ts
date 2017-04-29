import {Lesson} from "./lesson";
import {Board} from "../../../board";
import {Injector} from "@angular/core";
import {Player} from "../../../player";
import {LessonType} from "../lesson-type";
export class Transfiguration extends Lesson {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector);
    this.lessonType = LessonType.Transfiguration;
  }

}
