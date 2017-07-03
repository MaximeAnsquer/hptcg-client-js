import {Spell} from './spell';
import {LessonType} from '../lesson-type';
import {Injector} from '@angular/core';
import {Player} from '../../../player';
import {MdDialog} from '@angular/material';
import {CardState} from '../../../card-state.enum';

export class Avifors extends Spell {

  constructor(player: Player, id: number, injector: Injector) {
    super(player, id, injector, LessonType.Transfiguration, 2, injector.get(MdDialog));
  }

  canBePlayed(): boolean {
    let opponentHasCareOfMagicalCreatures = this.player.opponent.cardsInLessonZone
      .some(l => l.lessonType === LessonType.CareOfMagicalCreatures);
    return opponentHasCareOfMagicalCreatures && super.canBePlayed();
  }

  playEffect() {
    this.player.opponent.cardsInLessonZone
      .find(l => l.lessonType === LessonType.CareOfMagicalCreatures)
      .discard();
  }

}
