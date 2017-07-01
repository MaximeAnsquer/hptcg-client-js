import {MessageService} from "./shared/services/message.service";
import {Injector} from "@angular/core";
import {Player} from "./player";
import {LessonType} from "./shared/model/lesson-type";
import {CardState} from './card-state.enum';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export abstract class Card {

  player: Player;
  id: number;
  name: string;
  imagePath: string;
  lessonType: LessonType;
  cost: number;
  state = 'inDeck';
  state2 = new BehaviorSubject(CardState.inDeck);

  protected messageService: MessageService;

  constructor(player: Player, id: number, injector: Injector) {
    this.messageService = injector.get(MessageService);
    this.id = id;
    this.player = player;
    this.imagePath = "assets/images/" + this.constructor.name + ".jpg";
    this.name = this.constructor.name;

    this.state2.asObservable().subscribe(() => this.updatePlayerCards());
  }

  play(): void {
    this.state = 'inPlay';
    this.state2.next(CardState.inPlay);
    this.messageService.messages.next({
      type: 'play-card-from-hand',
      cardName: this.name,
      cardId: this.id
    });
    this.player.hand = this.player.hand.filter(c => c !== this);
    this.playEffect();
  }

  opponentPlays(): void {
    this.player.hand = this.player.hand.filter(c => c !== this);
    this.playEffect();
  }

  lessonConditionOk(): boolean {
    if (this.cost) {
      let lessonTypeOk = this.player.lessonsInPlay
        .some(l => l.lessonType === this.lessonType);
      let costOk = this.player.lessonsInPlay.length >= this.cost;
      return lessonTypeOk && costOk;
    }
    return true;
  }

  canBePlayed(): boolean {
    return this.lessonConditionOk();
  }

  clickInHand(): void {
    if (this.canBePlayed()) {
      this.play();
    }
  }

  playEffect() {

  }

  toggleState() {
    if (this.state === 'active') {
      this.state = 'inactive';
    } else {
      this.state = 'active';
    }
  }

  updatePlayerCards() {
    this.player.cards.next(this.player.cards.getValue());
  }

}
