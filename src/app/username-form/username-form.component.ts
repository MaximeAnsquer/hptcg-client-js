import { Component, OnInit } from '@angular/core';
import {UsernameService} from "../shared/services/username.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {

  username: string = '';

  constructor(private service: UsernameService, private router: Router) { }

  ngOnInit() {
  }

  setUsername() {
    if (this.username) {
      this.service.setUsername(this.username);
      if (this.router.url === '/login') {
        this.router.navigate(['/']);
      }
    }
  }

}
