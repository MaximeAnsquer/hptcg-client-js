import { Component, OnInit } from '@angular/core';
import {Card} from "../card";

@Component({
  selector: 'app-discard-pile',
  templateUrl: './discard-pile.component.html',
  styleUrls: ['./discard-pile.component.css']
})
export class DiscardPileComponent implements OnInit {

  cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
