import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UsernameService {

  username = new BehaviorSubject<string>(localStorage.getItem('hptcg-username'));

  getUsername(): string {
    return this.username.getValue();
  }

  setUsername(username: string) {
    localStorage.setItem('hptcg-username', username);
    this.username.next(username);
  }

}
