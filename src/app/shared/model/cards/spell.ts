import {Card} from "../../../card";
import {Injector} from "@angular/core";
import {Player} from "../../../player";
import {LessonType} from "../lesson-type";

export class Spell extends Card {

  constructor(player: Player, id: number, injector: Injector, lessonType: LessonType, cost: number) {
    super(player, id, injector);
  }




  play(): void {
    super.play();
  }
}