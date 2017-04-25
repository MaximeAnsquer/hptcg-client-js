import {Card} from "./card";
import {Charms} from "./charms";
import {Board} from "./board";
export class Player {

  hand: Card[];
  cardsInPlay: Card[];
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
    ];
    this.cardsInPlay = [];
  }

}
