import {Board} from "./board";
export abstract class Card {

  board: Board;
  name: string;
  imagePath: string;

  constructor(board: Board) {
    this.board = board;
    this.imagePath = this.constructor.name;
  }

  play() {

  }

  opponentPlays() {

  }

}
