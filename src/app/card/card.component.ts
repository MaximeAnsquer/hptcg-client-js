import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../card';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardState', [
      // state('inactive', style({
      //   backgroundColor: '#eee',
      //   transform: 'scale(1)'
      // })),
      // state('active', style({
      //   backgroundColor: '#cfd8dc',
      //   transform: 'scale(1.1)'
      // })),
      // transition('inactive => active', animate('100ms ease-in')),
      // transition('active => inactive', animate('100ms ease-out')),
      transition('void => inHand', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('void => inPlay', [
        style({transform: 'translateY(100%)'}),
        animate(500)
      ]),
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() {
  }

  ngOnInit() {
  }

  animationDone(e: any) {
    console.log(e.fromState + ' => ' + e.toState);
  }

}
