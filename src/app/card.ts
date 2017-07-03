import {MessageService} from './shared/services/message.service';
import {Injector} from '@angular/core';
import {Player} from './player';
import {LessonType} from './shared/model/lesson-type';
import {CardState} from './card-state.enum';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {FadingStatus} from './fading-status.enum';
import {MdDialog, MdDialogRef} from '@angular/material';
import {CardZoomComponent} from './card-zoom/card-zoom.component';

export abstract class Card {

  player: Player;
  id: number;
  name: string;
  imagePath: string;
  lessonType: LessonType;
  cost: number;
  flatState = 'inDeck';
  state = new BehaviorSubject(CardState.inDeck);
  flatFadingStatus: string = FadingStatus.neutral.toString();
  fadingStatus = new BehaviorSubject(FadingStatus.neutral);

  protected messageService: MessageService;

  zoomDialogRef: MdDialogRef<CardZoomComponent>;
  dialog: MdDialog;

  constructor(player: Player, id: number, injector: Injector) {
    this.messageService = injector.get(MessageService);
    this.dialog = injector.get(MdDialog);
    this.id = id;
    this.player = player;
    this.imagePath = 'assets/images/' + this.constructor.name + '.jpg';
    this.name = this.constructor.name;

    this.state.asObservable().subscribe(newState => {
      this.updatePlayerCards();
      this.flatState = newState.toString();
    });

    this.fadingStatus.asObservable().subscribe(newFadingStatus => {
      this.flatFadingStatus = newFadingStatus.toString();
    });
  }

  play(): void {
    // this.state.next(CardState.inPlay);
    this.beforePlayEffect();

    // this.player.hand = this.player.hand.filter(c => c !== this);
    this.playEffect();
  }

  opponentPlays(): void {
    // this.player.hand = this.player.hand.filter(c => c !== this);
    // this.playEffect();
  }

  lessonConditionOk(): boolean {
    if (this.cost) {
      let lessonTypeOk = this.player.cardsInLessonZone
        .some(l => l.lessonType === this.lessonType);
      let costOk = this.player.cardsInLessonZone.length >= this.cost;
      return lessonTypeOk && costOk;
    }
    return true;
  }

  canBePlayed(): boolean {
    return this.lessonConditionOk();
  }

  clickInHand(): void {
    if (this.canBePlayed()) {
      this.declarePlayToOpponent();
      this.play();
    }
  }

  playEffect() {

  }

  toggleState() {
    if (this.flatState === 'active') {
      this.flatState = 'inactive';
    } else {
      this.flatState = 'active';
    }
  }

  updatePlayerCards() {
    this.player.cards.next(this.player.cards.getValue());
  }

  discard() {
    this.state.next(CardState.inDiscardPile);
  }

  zoomTwoSeconds(): void {
    this.state.next(CardState.zoomBeforePlay);
    this.zoomDialogRef = this.dialog.open(CardZoomComponent, {data: this, disableClose: true});
    setTimeout(() => this.zoomDialogRef.close(), 2000);
  }

  beforePlayEffect() {

  }

  private declarePlayToOpponent() {
    this.messageService.messages.next({
      type: 'play-card-from-hand',
      cardName: this.name,
      cardId: this.id
    });
  }

}
