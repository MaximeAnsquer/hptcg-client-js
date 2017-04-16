import { Component } from '@angular/core';
import {MessageService} from '../shared/services/message.service';

@Component({
  selector: 'app-fake-component',
  templateUrl: './fake-component.component.html',
  styleUrls: ['./fake-component.component.css']
})
export class FakeComponentComponent {

  messagesReceived = [];
  messageToSend: string;

  constructor(private messageService: MessageService) {
    messageService.messages.subscribe(message => {
      console.log('message: ' + message);
      console.log('type of message: ' + typeof message);
      this.messagesReceived.push(JSON.stringify(message));
    });
  }

  sendMessage() {
    this.messageService.messages.next({type : this.messageToSend, id : 1});
  }

}
