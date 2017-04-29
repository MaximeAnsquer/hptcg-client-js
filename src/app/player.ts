import {Card} from "./card";
import {Board} from "./board";
import {Lesson} from "app/shared/model/cards/lesson";
export class Player {

  lessonsInPlay: Set<Lesson> = new Set();
  hand: Card[] = [];
  cardsInPlay: Card[] = [];
  board: Board;
  opponent: Player;

  constructor(board: Board) {
    this.board = board;
  }

}
