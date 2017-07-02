import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../player';
import {Card} from '../card';

@Component({
  selector: 'discard-pile',
  templateUrl: './discard-pile.component.html',
  styleUrls: ['./discard-pile.component.css']
})
export class DiscardPileComponent implements OnInit {

  @Input() player: Player;
  topCard: Card;

  constructor() {
  }

  ngOnInit() {
    this.player.cards.asObservable().subscribe(() => {
      this.topCard = this.getTopCard();
    })
  }

  private getTopCard(): Card {
    return this.player.cardsInDiscardPile.slice(-1)[0];
  }

}
