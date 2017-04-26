import {Lesson} from "./lesson";
import {Board} from "./board";
import {Injector} from "@angular/core";
export class Charms extends Lesson {

  constructor(board: Board, id: number, injector: Injector) {
    super(board, id, injector);
  }

}
