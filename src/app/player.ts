import {Card} from "./card";
import {Board} from "./board";
import {Lesson} from "app/shared/model/cards/lesson";
import {DiscardPile} from "./shared/model/discard-pile";
export class Player {

  lessonsInPlay: Lesson[] = [];
  hand: Card[] = [];
  cardsInPlay: Card[] = [];
  board: Board;
  opponent: Player;
  discardPile: DiscardPile = new DiscardPile();
  topDiscardPile: Card;

  constructor(board: Board) {
    this.board = board;
    this.opponent = board.opponent;

    this.discardPile.subscribe(c => this.topDiscardPile = c);
  }

}
