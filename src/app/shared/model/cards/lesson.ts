import {Card} from "../../../card";
import {Board} from "../../../board";
import {MessageService} from "../../services/message.service";
import {Injector} from "@angular/core";
import {Player} from "../../../player";
import {LessonType} from "../lesson-type";
export abstract class Lesson extends Card {

  lessonType: LessonType;

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector);
  }

  play() {
    super.play();
    this.playEffect();
  }

  opponentPlays() {
    super.opponentPlays();
    this.playEffect();
  }

  playEffect() {
    this.player.hand = this.player.hand.filter(c => c !== this);
    this.player.lessonsInPlay.push(this);
  }

}
