import {Player} from "./player";
export class Board {

  you: Player;
  opponent: Player;

  constructor() {
    this.you = new Player(this);
    this.opponent = new Player(this);

    this.you.opponent = this.opponent;
    this.opponent.opponent = this.you;
  }

}
