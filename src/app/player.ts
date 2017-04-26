import {Card} from "./card";
import {Charms} from "./charms";
import {Board} from "./board";
import {Lesson} from "app/lesson";
export class Player {

  hand: Card[];
  lessonsInPlay: Set<Lesson> = new Set();
  cardsInPlay: Card[] = [];
  board: Board;

  constructor(board: Board) {
    this.board = board;
    this.hand = [
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
      new Charms(board),
    ];
  }

}
