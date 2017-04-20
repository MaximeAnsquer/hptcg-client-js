import {Component, Inject, OnInit} from '@angular/core';
import {Deck} from "../shared/model/deck";
import {Router} from "@angular/router";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {MessageService} from "../shared/services/message.service";
import {UsernameService} from "../shared/services/username.service";

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-deck.component.html',
  styleUrls: ['./choose-deck.component.css']
})
export class ChooseDeckComponent implements OnInit {

  availableDecks: Deck[];
  chosenDeck: Deck;
  gameId: number;
  action: string;

  constructor(
    private router: Router,
    private usernameService: UsernameService,
    private dialogRef: MdDialogRef<ChooseDeckComponent>,
    @Inject(MD_DIALOG_DATA) private data: any,
    private messageService: MessageService) {
    if (data) {
      this.gameId = data.id;
      this.action = data.action;
    }
  }

  ngOnInit() {
    this.availableDecks = [
      new Deck("Hermione's deck"),
      new Deck("Draco's deck")
    ];
  }

  validateDeck() {
    this.messageService.messages.next({
      type : 'deck',
      value: this.chosenDeck
    });
    switch(this.action) {
      case 'joining-game':
        this.messageService.messages.next({type: 'join-game', id: this.gameId});
        this.router.navigate(['/game']);
        break;
      case 'creating-game':
        this.messageService.messages.next({
          type : 'create-game',
          username: this.usernameService.getUsername()
        });
        break;
      default:
        break;
    }
  }

}
