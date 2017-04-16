import {Injectable} from '@angular/core';
import {WebSocketService} from './web-socket.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {setInterval} from "timers";

@Injectable()
export class MessageService {

  public messages: Subject<any> = new Subject<any>();

  constructor(private wsService: WebSocketService) {
    let serverUrl = window.location.hostname === 'localhost' ? 'ws://localhost:5000' : 'ws://hptcg-server.herokuapp.com';

    this.messages = <Subject<any>> this.wsService
      .connect(serverUrl)
      .map((response: MessageEvent): any => {
        console.log("MessageService - response.data: " + response.data);
        return JSON.parse(response.data);
      });

    window.setInterval(() => {
      console.log('sending ping to server');
      this.messages.next({type: 'ping'});
    }, 10*1000);
  }

}
