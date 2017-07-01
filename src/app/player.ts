import {Card} from "./card";
import {Board} from "./board";
import {Lesson} from "app/shared/model/cards/lesson";
import {DiscardPile} from "./shared/model/discard-pile";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CardState} from './card-state.enum';
import {Observable} from 'rxjs/Observable';
export class Player {

  cards: BehaviorSubject<Card[]>;
  lessonsInPlay: Lesson[] = [];
  hand: Card[] = [];
  cardsInPlay: Card[] = [];
  cardsInHand2: Card[];
  board: Board;
  opponent: Player;
  discardPile: DiscardPile = new DiscardPile();
  topDiscardPile: Card;

  constructor(board: Board) {
    this.board = board;
    this.opponent = board.opponent;

    this.cards = new BehaviorSubject([]);

    this.discardPile.subscribe(c => this.topDiscardPile = c);

    // this.cardsInHand2 = this.cards.asObservable()
    //   .map(() => this.cards.value.filter(c => c.state2 === CardState.inHand));

    this.cards.asObservable().subscribe(cards =>
      this.cardsInHand2 = cards.filter(c => c.state2.getValue() === CardState.inHand)
    );

  }

  addCard(card: Card, state: CardState): void {
    card.state2.next(state);
    this.cards.value.push(card);
    this.cards.next(this.cards.value);
  }

}
