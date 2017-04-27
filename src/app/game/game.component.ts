import { Component, OnInit } from '@angular/core';
import {Board} from "../board";
import {MessageService} from "../shared/services/message.service";
import {CardFactoryService} from "../card-factory.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  board: Board;

  constructor(
    private messageService: MessageService,
    private cardFactory: CardFactoryService) { }

  ngOnInit() {
    this.board = new Board();
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
        this.opponentPlays(message);
        break;
      default:
        break;
    }
  }

  draw(message: any) {
    let cardName = message['cardName'];
    let cardId = message['cardId'];
    let card = this.cardFactory.create(cardName, cardId, this.board);
    this.board.you.hand.push(card);
  }

  opponentDraws(message: any) {
    let cardName = message['cardName'];
    let cardId = message['cardId'];
    let card = this.cardFactory.create(cardName, cardId, this.board);
    this.board.opponent.hand.push(card);
  }

  opponentPlays(message: any) {
    let cardName = message['cardName'];
    let cardId = message['cardId'];
    let card = this.board.opponent.hand.find(c => c.id === cardId);
    card.opponentPlays();
  }

}
