import {Component, OnInit} from '@angular/core';
import {UsernameService} from "./shared/services/username.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username: string;

  constructor(private usernameService: UsernameService) {}

  ngOnInit() {
    this.username = this.usernameService.getUsername();
  }




}
