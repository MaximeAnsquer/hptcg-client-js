import {Card} from "../../../card";
import {Board} from "../../../board";
import {MessageService} from "../../services/message.service";
import {Injector} from "@angular/core";
export abstract class Lesson extends Card {

  constructor(board: Board, id: number, injector: Injector) {
    super(board, id, injector);
  }

  play() {
    super.play();
    this.board.you.hand = this.board.you.hand.filter(c => c !== this);
    this.board.you.lessonsInPlay.add(this);
  }

  opponentPlays() {
    super.opponentPlays();
    this.board.opponent.hand = this.board.opponent.hand.filter(c => c !== this);
    this.board.opponent.lessonsInPlay.add(this);
  }

}
