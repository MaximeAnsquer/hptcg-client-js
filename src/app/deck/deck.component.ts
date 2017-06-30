import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/services/message.service';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  askForDraw(): void {
    this.messageService.messages.next({type: 'draw'});
  }

}
