import { Component, OnInit } from '@angular/core';
import {Board} from "../board";
import {MessageService} from "../shared/services/message.service";
import {CardFactoryService} from "../card-factory.service";
import {Player} from "../player";
import {MdDialog} from "@angular/material";
import {DiscardPileComponent} from "../discard-pile/discard-pile.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  board: Board;
  you: Player;
  opponent: Player;

  constructor(
    private messageService: MessageService,
    private cardFactory: CardFactoryService,
    private dialog: MdDialog) { }

  ngOnInit() {
    this.board = new Board();
    this.you = this.board.you;
    this.opponent = this.board.opponent;
    this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.messageService.messages.next({type: 'draw-hand'});
  }

  handleMessage(message: any) {
    switch (message['type']) {
      case 'draw':
        this.draw(message);
        break;
      case 'opponent-draws':
        this.opponentDraws(message);
        break;
      case 'opponent-plays-card-from-hand':
        this.opponentPlaysCardFromHand(message);
        break;
      default:
        break;
    }
  }



  draw(message: any) {
    let cardName = message['cardName'];
    let cardId = message['cardId'];
    let card = this.cardFactory.create(cardName, cardId, this.you);
    card.state = 'inHand';
    this.board.you.hand.push(card);
  }

  opponentDraws(message: any) {
    let cardName = message['cardName'];
    let cardId = message['cardId'];
    let card = this.cardFactory.create(cardName, cardId, this.opponent);
    this.board.opponent.hand.push(card);
  }

  opponentPlaysCardFromHand(message: any) {
    let cardName = message['cardName'];
    let cardId = message['cardId'];
    let card = this.board.opponent.hand.find(c => c.id === cardId);
    card.opponentPlays();
  }

  showDiscardPile(player: Player): void {
    let dialogRef = this.dialog.open(DiscardPileComponent);
    dialogRef.componentInstance.cards = player.discardPile.cards;
  }

}
