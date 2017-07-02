import {Card} from "./card";
import {Board} from "./board";
import {Lesson} from "app/shared/model/cards/lesson";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CardState} from './card-state.enum';
import {MessageService} from './shared/services/message.service';
export class Player {

  cards: BehaviorSubject<Card[]>;
  // lessonsInPlay: Lesson[] = [];
  hand: Card[] = [];
  cardsInPlay: Card[] = [];
  cardsInHand: Card[];
  board: Board;
  opponent: Player;
  // discardPile: DiscardPile = new DiscardPile();
  cardsInDiscardPile: Card[];
  topDiscardPile: Card;
  cardsInLessonZone: Card[];
  messageService: MessageService;

  constructor(board: Board) {
    this.board = board;
    this.opponent = board.opponent;

    this.cards = new BehaviorSubject([]);

    // this.discardPile.subscribe(c => this.topDiscardPile = c);

    // this.cardsInHand = this.cards.asObservable()
    //   .map(() => this.cards.value.filter(c => c.state === CardState.inHand));

    this.cards.asObservable().subscribe(cards => {
        this.cardsInHand = cards.filter((c: Card) => c.state.getValue() === CardState.inHand);
        this.cardsInLessonZone = cards.filter((c: Card) => c.state.getValue() === CardState.inLessonZone);
        this.cardsInDiscardPile = cards.filter((c: Card) => c.state.getValue() === CardState.inDiscardPile);
      });

  }

  addCard(card: Card, state: CardState): void {
    card.state.next(state);
    this.cards.value.push(card);
    this.cards.next(this.cards.value);
  }

  getCardsInDiscardPile(): Card[] {
    return this.cards.getValue().filter((c: Card) => c.state.getValue() === CardState.inDiscardPile);
  }

  askServerForDraw(): void {
    this.messageService.messages.next({ type: 'draw' });
  }

}
