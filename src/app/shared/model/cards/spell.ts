import {Card} from "../../../card";
import {Injector} from "@angular/core";
import {Player} from "../../../player";
import {LessonType} from "../lesson-type";
import {CardState} from '../../../card-state.enum';
import {MdDialog, MdDialogRef} from '@angular/material';
import {CardZoomComponent} from '../../../card-zoom/card-zoom.component';

export class Spell extends Card {

  constructor(player: Player, id: number, injector: Injector, lessonType: LessonType, cost: number, private dialog: MdDialog) {
    super(player, id, injector);
    this.lessonType = lessonType;
    this.cost = cost;

    this.state.asObservable().subscribe(newState => {
      this.checkZoomBeforePlay(newState);
    })
  }

  private checkZoomBeforePlay(newState: CardState) {
    if (newState === CardState.zoomBeforePlay) {
      this.onZoomBeforePlayState();
    }
  }

  private onZoomBeforePlayState() {
    let zoomDialogRef = this.dialog.open(CardZoomComponent, {data: this, disableClose: true});
    zoomDialogRef.afterClosed().subscribe(() => {
      // super.play();
      this.discard();
    });
    setTimeout(() => zoomDialogRef.close(), 2000);
  }

  play(): void {
    this.state.next(CardState.zoomBeforePlay);
    // this.player.discardPile.add(this);
    // super.play();
  }

  opponentPlays(): any {
    // this.player.discardPile.add(this);
    super.opponentPlays();
  }

}
