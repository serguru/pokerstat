import { Component, OnInit } from '@angular/core';
import { hands } from './helpers/data';
import { Hand } from './helpers/hand';
import { Card } from './helpers/card';
import { suites, rankings, handValues } from './helpers/consts';
import { HandValue } from './helpers/hand-value';
import { GroupValue } from './helpers/group-value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ns = [];
  groupTotal: number;
  normalTotal = 1326;
  values = [];

  ngOnInit(): void {

    const result: GroupValue[] = [];
    this.groupTotal = 0;

    for (let i = 1; i <= 9; i++) {
      const a = [];
      hands.forEach(x => a.push(0));
      const value = new GroupValue(i, 0, 0);
      result.push(value);
    }

    handValues.forEach(x => {
      if (x.id.substr(0, 1) == x.id.substr(1, 1)) {
        result[x.notSuited - 1].normal = result[x.notSuited - 1].normal + 6;
        this.groupTotal = this.groupTotal + 6;
      } else {
        result[x.suited - 1].normal = result[x.suited - 1].normal + 4;
        result[x.notSuited - 1].normal = result[x.notSuited - 1].normal + 12;
        this.groupTotal = this.groupTotal + 16;
      }
    })

    if (this.groupTotal !== this.normalTotal) {
      throw new Error(`Total != ${this.normalTotal} !!!`)
    }

    const ns = [];

    hands.forEach(x => {
      const hand = Hand.str2hand(x);
      ns.push(hand);
      const handValue: number = this.getHandValue(hand);
      result[handValue - 1].fact++;
    })

    result.forEach(x => {
      x.normal = Math.round(x.normal / this.normalTotal * 100);
      x.fact = Math.round(x.fact / hands.length * 100);
    })

    this.ns = ns;
    this.values = result;
  }

  getHandValue(hand: Hand): number {
    let handValue: HandValue = handValues.find(x => {
      const result: boolean = x.id == hand.caption || x.id == hand.captionReverted;
      return result;
    });

    if (!handValue) {
      throw new Error('Hand value not found')
    }

    return hand.isSuited ? handValue.suited : handValue.notSuited;
  }
}


