import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../card';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {MdDialog} from '@angular/material';
import {CardZoomComponent} from '../card-zoom/card-zoom.component';
import {CardState} from '../card-state.enum';
import {FadingStatus} from '../fading-status.enum';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fadingStatus', [
      state(FadingStatus.fading.toString(), style({
        opacity: 0
      })),
      state(FadingStatus.appearing.toString(), style({
        opacity: 1
      })),
      state(FadingStatus.neutral.toString(), style({
      })),
      transition('neutral => fading', [
        animate(500)
      ]),
    ]),
    trigger('cardState', [
      state(CardState.inDiscardPile.toString(), style({
        opacity: 1,
      })),
      // state('active', style({
      //   backgroundColor: '#cfd8dc',
      //   transform: 'scale(1.1)'
      // })),
      // transition('inactive => active', animate('100ms ease-in')),
      // transition('active => inactive', animate('100ms ease-out')),
      transition('void => ' + CardState.inHand, [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('void => ' + CardState.inPlay, [
        style({transform: 'translateY(100%)'}),
        animate(500)
      ]),
      transition('void => ' + CardState.inOpponentHand, [
        style({transform: 'translateY(-100%)'}),
        animate(500)
      ]),
      transition('* => ' + CardState.inDiscardPile, [
        style({opacity: 0}),
        animate(500)
      ]),
      transition('* => ' + CardState.inLessonZone, [
        style({opacity: 0}),
        animate(500)
      ]),
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor(private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  animationDone(e: any) {
    console.log(e.fromState + ' => ' + e.toState);
  }

  zoom(): boolean {
    this.dialog.open(CardZoomComponent, {data: this.card});
    return false;
  }

}
