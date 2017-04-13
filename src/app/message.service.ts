import { Injectable } from '@angular/core';
import {WebSocketService} from './web-socket.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  public messages: Subject<string> = new Subject<string>();

  constructor(private wsService: WebSocketService) {

    this.messages = <Subject<string>> this.wsService
      // .connect('ws://localhost:5000')
      .connect('ws://hptcg-server.herokuapp.com')
      .map((response: MessageEvent): string => JSON.parse(response.data));

  }

}
