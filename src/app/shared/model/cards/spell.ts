import {Card} from "../../../card";
import {Injector} from "@angular/core";
import {LessonType} from "../lesson-type";
import {Player} from "../../../player";

export class Spell extends Card {

  cost: number;
  lessonType: LessonType;

  constructor(player: Player, id: number, injector: Injector, cost: number, lessonType: LessonType) {
    super(player, id, injector);
    this.cost = cost;
    this.lessonType = lessonType;
  }

}
