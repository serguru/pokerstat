import { Component, OnInit, ViewChild } from '@angular/core';
import { Hand } from './helpers/hand';
import { rawHandRankings } from './helpers/consts';
import { HandValue } from './helpers/hand-value';
import { Row } from './helpers/row';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    if (this.rawHandRanking.length != this.rawLength) {
      throw new Error('Wrong raw collection length');
    }
    this.rawHandRanking.forEach(x => {
      const i = this.rawHandRanking.indexOf(x);
      this.rawHandRanking[i] = x.trim();
    })
    this.updateRows();
  }

  @ViewChild('file', { static: false }) file;
  rawLength = 169;
  rows: Row[] = [];
  rawHandRanking: string[] = rawHandRankings[0].value.split(','); // 169 entries
  fileContent: any;
  playedHands: string[];

  validate(s: string): boolean {
    let ok: boolean = /^[tjqkaTJQKA2-9]{1}[scdhSCDH]{1}[tjqkaTJQKA2-9]{1}[scdhSCDH]{1}/.test(s);
    if (!ok) {
      return false;
    }

    if (s.substr(0, 1).toLowerCase() != s.substr(2, 1).toLowerCase()) {
      return true;
    }

    return s.substr(2, 1).toLowerCase() != s.substr(4, 1).toLowerCase();
  }


  processFile(): void {
    if (!this.fileContent) {
      throw new Error('No input file');
    }

    let lines: string[];
    if (!this.fileContent.text) {
      throw new Error('Wrong hands history file format');
    }
    this.fileContent.text().then((s: string) => {
      try {
        lines = s.split('\n').map(x => !x ? x : x.trim());
      }
      catch
      {
        throw new Error('Cannot read hands history');
      }

      if (lines.length == 0) {
        throw new Error('No hands in this file');
      }

      for (let i = 0; i < lines.length; i++) {
        const hand: string = lines[i];
        if (!this.validate(hand)) {
          throw new Error(`A hand #${i + 1} "${hand}" is invalid`)
        }
      }

      this.playedHands = lines;
      this.updateRows();
    })
  }

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

  get overallResult(): string {
    let v: number = 0;
    this.rows.forEach(x => {
      v += x.fact * x.success
    })

    if (!this.playedHands) {
      return "";
    }

    v = v / this.playedHands.length;

    return (v < 0 ? 'Failure ' : 'Success ') + v.toFixed(2) + '%';
  }

  get handsTotal(): string {
    return this.playedHands ? this.playedHands.length.toString() : "no hands";
  }


  onFileOpen() {
    if (!this.file.nativeElement.files || this.file.nativeElement.files.length == 0) {
      return;
    }
    this.fileContent = this.file.nativeElement.files[0];

    this.processFile();
  }

  selectFile() {
    this.file.nativeElement.click();
  }

  get fileName(): string {
    return this.fileContent ? this.fileContent.name : 'hands';
  }

  saveFile() {
    if (!this.playedHands) {
      return;
    }

    let s: string = "";

    this.playedHands.forEach(x => {
      s += x + '\n'
    })

    var file = new Blob([s], { type: "text/plain" });

    if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, this.fileName);
    else { // Others
      const a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = this.fileName;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }

  }

}


