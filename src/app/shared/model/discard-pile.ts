import {Card} from "../../card";
import {Subject} from "rxjs/Subject";

export class DiscardPile extends Subject<Card> {

  cards: Card[];

  constructor() {
    super();
    this.cards = [];
  }

  add(card: Card): void {
    this.cards.push(card);
    this.next(card);
  }

  getTopCard(): Card {
    return this.cards.slice(-1).pop();
  }

}
