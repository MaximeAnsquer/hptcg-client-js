import {Card} from "../../../card";
import {Injector} from "@angular/core";
import {Player} from "../../../player";
import {LessonType} from "../lesson-type";
import {CardState} from '../../../card-state.enum';
export abstract class Lesson extends Card {

  lessonType: LessonType;

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector);
  }

  playEffect() {
    this.state.next(CardState.inLessonZone);
  }

}
