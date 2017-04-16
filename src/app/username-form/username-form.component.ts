import { Component, OnInit } from '@angular/core';
import {UsernameService} from "../shared/services/username.service";

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {

  username: string = '';

  constructor(private service: UsernameService) { }

  ngOnInit() {
  }

  setUsername() {
    this.service.setUsername(this.username);
  }

}
