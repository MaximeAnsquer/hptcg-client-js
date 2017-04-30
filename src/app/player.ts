import {Card} from "./card";
import {Board} from "./board";
import {Lesson} from "app/shared/model/cards/lesson";
export class Player {

  lessonsInPlay: Lesson[] = [];
  hand: Card[] = [];
  cardsInPlay: Card[] = [];
  board: Board;
  opponent: Player;
  discardPile: Card[] = [];

  constructor(board: Board) {
    this.board = board;
    this.opponent = board.opponent;
  }

}
