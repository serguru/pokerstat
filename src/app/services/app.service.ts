import { Injectable } from '@angular/core';
import { ThumbComponent } from '../components/thumb/thumb.component';
import { Row } from '../helpers/row';
import { rawHandRankings } from '../helpers/consts';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  lastHandFromSelected() {

    if (!this.selected || this.selected.length == 0) {
      return undefined;
    }

    if (this.selected.length == 1) {
      return `${this.selected[0].rank}${this.selected[0].suit}`;
    }

    return `${this.selected[0].rank}${this.selected[0].suit}${this.selected[1].rank}${this.selected[1].suit}`;
  }

  addHandByThumb(thumb: ThumbComponent) {

    const index: number = this.selected.indexOf(thumb);

    if (index < 0) {
      this.selected.push(thumb);
    } else {
      this.selected.splice(index, 1);
      this.lastHand = this.lastHandFromSelected();
      return;
    }

    if (this.selected.length == 1) {
      this.lastHand = this.lastHandFromSelected();
      return;
    }

    const hand: string = this.lastHandFromSelected();
    this.lastHand = hand;
    this.playedHands.push(hand);
    this.handsToLocalStorage();
    this.updateRows();

    this.selected.length = 0;
  }

  lastHand: string;

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

    this.success = this.getSuccess();
  }

  rowByHand(hand: string): Row {
    if (!this.rows) {
      return null;
    }

    const raw: string = this.hand2raw(hand, false);
    const rawR: string = this.hand2raw(hand, true);

    let result: Row = this.rows.find(x => x.hands.find(y => y == raw)) ||
      this.rows.find(x => x.hands.find(y => y == rawR));

    if (!result) {
      throw new Error(`Played hand ${raw} not found`)
    }

    return result;

  }

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

  handsKey = "hands";

  handsToLocalStorage() {
    if (!this.playedHands || this.playedHands.length == 0) {
      localStorage.removeItem(this.handsKey);
      return;
    }
    localStorage.setItem(this.handsKey, this.hands2string())
  }

  handsFromLocalStorage() {
    const s: string = localStorage.getItem(this.handsKey);
    if (!s) {
      return;
    }

    const lines: string[] = this.string2lines(s);

    const error: string = this.validateLines(lines);

    if (error) {
      throw new Error(error);
    }

    this.playedHands = lines;
  }

  validateLines(lines: string[]): string {
    for (let i = 0; i < lines.length; i++) {
      const hand: string = lines[i];
      if (!this.validate(hand)) {
        return `A hand #${i + 1} "${hand}" is invalid`;
      }
    }
    return undefined;
  }

  string2lines(s: string): string[] {
    let lines: string[];
    try {
      lines = s.split('\n').map(x => !x ? x : x.trim());
    }
    catch
    {
      throw new Error('Cannot read hands history');
    }

    return lines;
  }

  processFiles(files: FileList): void {
    if (!files || files.length == 0) {
      throw new Error("No files to load hands from");
    }


    for (let i = 0; i < files.length; i++) {
      const fileContent: any = files[i];
      if (!fileContent.text) {
        throw new Error('Wrong hands history file format');
      }

      fileContent.text().then((s: string) => {

        const lines: string[] = this.string2lines(s);

        if (lines.length == 0) {
          throw new Error('No hands in this file');
        }

        const error: string = this.validateLines(lines);

        if (error) {
          throw new Error(error);
        }

        this.playedHands.push(...lines);

      })
    }


    this.updateRows();
  }








  hands2string(): string {
    let s: string = "";
    this.playedHands.forEach((x: string, i: number) => {
      s += x + (i == this.playedHands.length - 1 ? '' : '\n');
    })
    return s;
  }

  hands2blob(): Blob {

    const s = this.hands2string();

    const file = new Blob([s], { type: "text/plain" });

    return file;
  }

  saveFile() {
    if (!this.playedHands) {
      return;
    }

    if (this.playedHands.length == 0) {
      throw new Error("No hands - nothing to save");
    }

    var file = this.hands2blob();

    if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, 'hands.txt');
    else { // Others
      const a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = 'hands.txt';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }

  }

  get tabloStrObj(): any {

    const result = {
      hand: undefined,
      success: undefined,
      type: 1
    }

    if (!this.lastHand) {
      return result;
    }

    if (this.lastHand.length == 2) {
      result.hand = this.lastHand.toUpperCase();
      result.type = 2;
      return result;
    }

    const row = this.rowByHand(this.lastHand);

    if (!row) {
      throw new Error("Row not found")
    }

    result.type = 3;
    result.hand = this.lastHand.toUpperCase();
    result.success = " " + row.success + "%";

    return result;
  }

  public get tabloClass(): any {

    const row: Row = this.lastHand && this.lastHand.length == 4 ? this.rowByHand(this.lastHand) : undefined;
    const success: number = row ? row.success : undefined;

    return {
      'larger': true,
      'success': success >= 0,
      'failure': success < 0
    };
  }

  public get tabloClassS(): any {


    return {
      'larger': true,
      'success': this.success >= 0,
      'failure': this.success < 0
    };
  }

  success: number;

  getSuccess(): number {
    if (!this.rows || this.rows.length == 0 || !this.playedHands || this.playedHands.length == 0) {
      return undefined;
    }

    let v: number = 0;
    this.rows.forEach(x => {
      v += x.fact * x.success
    })

    v = v / this.playedHands.length;

    return v;
  }

  resetHands(): void {
    if (!this.playedHands) {
      return;
    }
    this.playedHands.length = 0;
    localStorage.removeItem(this.handsKey);
    this.updateRows();
  }

  char2SuitCode(c: string): string {
    switch (c) {
      case 's':
      case 'S':
        return String.fromCharCode(9824);
      case 'c':
      case 'C':
        return String.fromCharCode(9827);
      case 'd':
      case 'D':
        return String.fromCharCode(9830);
      case 'h':
      case 'H':
        return String.fromCharCode(9829);
      default:
        return undefined;
    }
  }

}
