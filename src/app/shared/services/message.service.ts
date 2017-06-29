import {Injectable} from '@angular/core';
import {WebSocketService} from './web-socket.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  public messages: Subject<any> = new Subject<any>();

  constructor(private wsService: WebSocketService) {
    // let serverUrl = window.location.hostname === 'localhost' ? 'ws://localhost:5000' : 'ws://hptcg-server.herokuapp.com';
    let serverUrl = 'ws://hptcg-server.herokuapp.com';

    this.messages = <Subject<any>> this.wsService
      .connect(serverUrl)
      .map((response: MessageEvent): any => {
        return JSON.parse(response.data);
      });

    window.setInterval(() => {
      this.messages.next({type: 'ping'});
    }, 10*1000);
  }

}
