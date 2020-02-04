import { Injectable } from '@angular/core';
import { ThumbComponent } from '../components/thumb/thumb.component';
import { Row } from '../helpers/row';
import { rawHandRankings } from '../helpers/consts';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { 
    if (this.rawHandRanking.length != this.rawLength) {
      throw new Error('Wrong raw collection length');
    }
  }

  rows: Row[] = [];
  rawLength = 169;

  rawHandRanking: string[] = 
    rawHandRankings[0].value
    .split(',') // 169 entries
    .map(x => {
      return x.trim();
    })

    playedHands: string[] = [];


  selected: ThumbComponent[] = [];

  toggleThumb(thumb: ThumbComponent) {
    const index: number = this.selected.indexOf(thumb);
    if (index < 0) {
      this.selected.push(thumb);
    } else {
      this.selected.splice(index, 1);
    }

    if (this.selected.length < 2) {
      return;
    }

    const hand: string = `${this.selected[0].rank}${this.selected[0].suit}${this.selected[1].rank}${this.selected[1].suit}`
    this.playedHands.unshift(hand);
    this.selected.length = 0;
    this.updateRows();
  }

  getRawHands(start: number, length: number): string[] {
    let result = [];
    for (let i = start; i < start + length; i++) {
      result.push(this.rawHandRanking[i]);
    }
    return result;
  }

  hand2raw(hand: string, reverted: boolean): string {

    const fi: number = reverted ? 2 : 0;
    const si: number = reverted ? 0 : 2;

    const f: string = hand.substr(fi, 1).toUpperCase();
    const s: string = hand.substr(si, 1).toUpperCase();
    let result: string = f + s;
    if (f == s) {
      return result;
    }
    const suited: boolean = hand.substr(1, 1).toUpperCase() == hand.substr(3, 1).toUpperCase();
    result += suited ? 's' : 'o';
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
      row.expected = length / this.rawLength * (this.playedHands ? this.playedHands.length : 0);
      row.fact = 0;
      result.push(row);
      p = p == 20 ? -20 : p - 20;
    }

    if (this.playedHands) {
      this.playedHands.forEach(x => {
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
    }

    this.rows = result;
  }


}
