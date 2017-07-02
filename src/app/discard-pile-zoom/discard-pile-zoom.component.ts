import { Component, OnInit } from '@angular/core';
import {Card} from "../card";

@Component({
  selector: 'discard-pile-zoom',
  templateUrl: './discard-pile-zoom.component.html',
  styleUrls: ['./discard-pile-zoom.component.css']
})
export class DiscardPileZoomComponent implements OnInit {

  cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
