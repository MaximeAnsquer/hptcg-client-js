import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {SettingsComponent} from "../settings/settings.component";

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openSettings() {
    this.dialog.open(SettingsComponent);
  }

}
