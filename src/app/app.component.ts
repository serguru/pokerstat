import { Component, OnInit } from '@angular/core';
import { Hand } from './helpers/hand';
import { handValues, rawHandRankings } from './helpers/consts';
import { HandValue } from './helpers/hand-value';
import { Row } from './helpers/row';
import { playedHands } from './helpers/data';

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


  constructor() {
    if (playedHands.length == 0) {
      throw new Error('No played hands');
    }
    if (this.rawHandRanking.length != this.rawLength) {
      throw new Error('Wrong raw collection length');
    }
    this.rawHandRanking.forEach(x => {
      const i = this.rawHandRanking.indexOf(x);
      this.rawHandRanking[i] = x.trim();
    })
    this.updateRows();
  }

  rawLength = 169;
  rows: Row[] = [];
  rawHandRanking: string[] = rawHandRankings[0].value.split(','); // 169 entries

  getRawHands(start: number, length: number): string[] {
      let result = [];
      for (let i = start; i < start + length; i++) {
        result.push(this.rawHandRanking[i]);
      }
      return result;
  }

  updateRows(): void {
    let p: number = 100;
    let result = [];
    for (let i = 0; i < 10; i++) {
      const row: Row = new Row();
      row.success = p;
      let length: number = i < 9 ? 17 : 16;
      let start = i * 17;
      row.hands = this.getRawHands(start, length);
      row.expected = length / this.rawLength * playedHands.length;
      row.fact = 0;
      result.push(row);
      p = p == 20 ? -20 : p - 20;
    }

    playedHands.forEach(x => {
      const raw: string = this.hand2raw(x, false);
      const rawR: string = this.hand2raw(x, true);
      let index = -1;
      let row: Row;
      for (let i = 0; i < 10; i++) {
        row = result[i];
        if (row.hands.find(x => x == raw || x == rawR)) {
          index = i;
          break;
        }
      }

      if (index == -1) {
        throw new Error(`Played hand ${raw} not found`)
      }

      row.fact++;
    })

    this.rows = result;
  }
  
  ngOnInit(): void {

  }

  hand2raw(hand: string, reverted: boolean): string {

    const fi: number = reverted ? 2 : 0;
    const si: number = reverted ? 0 : 2;

    const f: string = hand.substr(fi,1).toUpperCase();
    const s: string = hand.substr(si,1).toUpperCase();
    let result: string = f + s;
    if (f == s) {
      return result;
    }
    const suited: boolean = hand.substr(1,1).toUpperCase() == hand.substr(3,1).toUpperCase();
    result +=  suited ? 's' : 'o';
    return result;
  }

  get overallResult(): string {
    let v: number = 0;
    this.rows.forEach(x => {
      v += x.fact * x.success
    })

    v = v / playedHands.length;

    return (v < 0 ? 'Failure ' : 'Success ') + v.toFixed(2) + '%';
  }

  get handsTotal(): string {
    return playedHands.length.toString();
  }

  // ngOnInit(): void {

  //   const result: GroupValue[] = [];
  //   this.groupTotal = 0;

  //   for (let i = 1; i <= 9; i++) {
  //     const a = [];
  //     hands.forEach(x => a.push(0));
  //     const value = new GroupValue(i, 0, 0);
  //     result.push(value);
  //   }

  //   handValues.forEach(x => {
  //     if (x.id.substr(0, 1) == x.id.substr(1, 1)) {
  //       result[x.notSuited - 1].normal = result[x.notSuited - 1].normal + 6;
  //       this.groupTotal = this.groupTotal + 6;
  //     } else {
  //       result[x.suited - 1].normal = result[x.suited - 1].normal + 4;
  //       result[x.notSuited - 1].normal = result[x.notSuited - 1].normal + 12;
  //       this.groupTotal = this.groupTotal + 16;
  //     }
  //   })

  //   if (this.groupTotal !== this.normalTotal) {
  //     throw new Error(`Total != ${this.normalTotal} !!!`)
  //   }

  //   const ns = [];

  //   hands.forEach(x => {
  //     const hand = Hand.str2hand(x);
  //     ns.push(hand);
  //     const handValue: number = this.getHandValue(hand);
  //     result[handValue - 1].fact++;
  //   })

  //   result.forEach(x => {
  //     x.normal = Math.round(x.normal / this.normalTotal * 100);
  //     x.fact = Math.round(x.fact / hands.length * 100);
  //   })

  //   this.ns = ns;
  //   this.values = result;
  // }

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


