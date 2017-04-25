import {Card} from "./card";
import {Board} from "./board";
export abstract class Lesson extends Card {

  constructor(board: Board) {
    super(board);
  }

  play() {
    this.board.you.hand = this.board.you.hand.filter(c => c !== this);
    this.board.you.cardsInPlay.push(this);
  }


}
