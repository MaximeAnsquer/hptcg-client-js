import { Injectable } from '@angular/core';
import {WebSocketService} from './web-socket.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  public messages: Subject<any> = new Subject<any>();

  constructor(private wsService: WebSocketService) {

    this.messages = <Subject<any>> this.wsService
      .connect('ws://localhost:5000')
      // .connect('ws://hptcg-server.herokuapp.com')
      .map((response: MessageEvent): any => {
        console.log("MessageService - response.data: " + response.data);
        return JSON.parse(response.data);
      });

  }

}
