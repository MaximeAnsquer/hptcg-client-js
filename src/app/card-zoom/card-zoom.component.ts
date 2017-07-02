import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Card} from '../card';

@Component({
  selector: 'app-card-zoom',
  templateUrl: './card-zoom.component.html',
  styleUrls: ['./card-zoom.component.css']
})
export class CardZoomComponent implements OnInit {


  constructor(@Inject(MD_DIALOG_DATA) private card: Card, private dialogRef: MdDialogRef<CardZoomComponent>) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
