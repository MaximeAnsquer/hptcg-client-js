import {Card} from "./card";
import {Board} from "./board";
import {Lesson} from "app/lesson";
export class Player {

  lessonsInPlay: Set<Lesson> = new Set();
  hand: Card[] = [];
  cardsInPlay: Card[] = [];
  board: Board;

  constructor(board: Board) {
    this.board = board;
  }

}
