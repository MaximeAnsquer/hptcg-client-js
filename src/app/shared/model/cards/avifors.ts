import {Spell} from "./spell";
import {LessonType} from "../lesson-type";
import {Injector} from "@angular/core";
import {Player} from "../../../player";

export class Avifors extends Spell {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector, LessonType.Transfiguration, 2);
  }

  canBePlayed(): boolean {
    let opponentHasCareOfMagicalCreatures = this.player.opponent.lessonsInPlay
      .some(l => l.lessonType === LessonType.CareOfMagicalCreatures);
    return opponentHasCareOfMagicalCreatures && super.canBePlayed();
  }

  playEffect() {
    let careOfMagicalCreaturesToRemove = this.player.opponent.lessonsInPlay
      .find(l => l.lessonType === LessonType.CareOfMagicalCreatures);
    this.player.opponent.discardPile.add(careOfMagicalCreaturesToRemove);
    this.player.opponent.lessonsInPlay = this.player.opponent.lessonsInPlay
      .filter(l => l !== careOfMagicalCreaturesToRemove);
  }

}
