import {Card} from "../../../card";
import {Injector} from "@angular/core";
import {Player} from "../../../player";
import {LessonType} from "../lesson-type";

export class Creature extends Card {

  damageEachTurn: number;
  health: number;
  lessonsToDiscard: number;
  cost: number;

  constructor(player: Player, id: number, injector: Injector, damageEachTurn: number, health: number, cost: number) {
    super(player, id, injector);
    this.damageEachTurn = damageEachTurn;
    this.health = health;
    this.cost = cost;
    this.lessonType = LessonType.CareOfMagicalCreatures;
  }

  canBePlayed(): boolean {
    if (this.lessonsToDiscard) {
      let hasEnoughCareOfMagicalCreatures = this.player.lessonsInPlay
        .filter(l => l.lessonType === LessonType.CareOfMagicalCreatures).length >= this.lessonsToDiscard;
      return hasEnoughCareOfMagicalCreatures && this.lessonConditionOk();
    }
    return this.lessonConditionOk();
  }

  playEffect(): void {
    if (this.lessonsToDiscard) {
      for (let i = 0; i < this.lessonsToDiscard ; i++) {
        let lesson = this.player.lessonsInPlay
          .find(l => l.lessonType === LessonType.CareOfMagicalCreatures);
        this.player.lessonsInPlay = this.player.lessonsInPlay
          .filter(l => l !== lesson);
        this.player.discardPile.add(lesson);
      }
    }
    this.player.cardsInPlay.push(this);
  }

}
