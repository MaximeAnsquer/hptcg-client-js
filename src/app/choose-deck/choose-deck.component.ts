import {Component, Inject, OnInit} from '@angular/core';
import {Deck} from "../shared/model/deck";
import {Router} from "@angular/router";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {MessageService} from "../shared/services/message.service";

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-deck.component.html',
  styleUrls: ['./choose-deck.component.css']
})
export class ChooseDeckComponent implements OnInit {

  decks: Deck[];
  gameId: number;

  constructor(
    private router: Router,
    private dialogRef: MdDialogRef<ChooseDeckComponent>,
    @Inject(MD_DIALOG_DATA) private data: any,
    private messageService: MessageService) {
    if (data) {
      this.gameId = data.id;
    }
  }

  ngOnInit() {
    this.decks = [
      new Deck("Hermione's deck"),
      new Deck("Draco's deck")
    ];
  }

  validateGame() {
    this.messageService.messages.next({type: 'join-game', id: this.gameId});
    this.router.navigate(['/game']);
  }

}
