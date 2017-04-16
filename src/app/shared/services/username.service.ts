import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {MessageService} from "./message.service";

@Injectable()
export class UsernameService {

  username = new BehaviorSubject<string>(localStorage.getItem('hptcg-username'));

  constructor(private messageService: MessageService) {}

  getUsername(): string {
    return this.username.getValue();
  }

  setUsername(username: string) {
    localStorage.setItem('hptcg-username', username);
    this.username.next(username);
    this.messageService.messages.next({
      type: 'new-username',
      value: username
    });
  }

}
