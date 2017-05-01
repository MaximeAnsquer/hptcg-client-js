import {Spell} from "./spell";
import {Player} from "../../../player";
import {Injector} from "@angular/core";
import {LessonType} from "../lesson-type";

export class Epoximise extends Spell {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector, LessonType.Transfiguration, 2);
  }

  canBePlayed(): boolean {
    let opponentHasCharms = this.player.opponent.lessonsInPlay
      .some(l => l.lessonType === LessonType.Charms);
    return opponentHasCharms && super.canBePlayed();
  }

  playEffect() {
    let charmsToRemove = this.player.opponent.lessonsInPlay
      .find(l => l.lessonType === LessonType.Charms);
    this.player.opponent.discardPile.add(charmsToRemove);
    this.player.opponent.lessonsInPlay = this.player.opponent.lessonsInPlay
      .filter(l => l !== charmsToRemove);
  }
}
