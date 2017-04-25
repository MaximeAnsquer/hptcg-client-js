import { Component, OnInit } from '@angular/core';
import {Board} from "../board";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  board: Board;

  constructor() { }

  ngOnInit() {
    this.board = new Board();
  }

}
