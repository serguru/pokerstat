import { Component, OnInit, ViewChild } from '@angular/core';
import { Hand } from './helpers/hand';
import { HandValue } from './helpers/hand-value';
import { Row } from './helpers/row';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public appService: AppService) {
    this.appService.updateRows();
  }

  @ViewChild('file', { static: false }) file;
  fileContent: any;

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

      this.appService.playedHands = lines;
      this.appService.updateRows();
    })
  }


  get overallResult(): string {
    let v: number = 0;
    this.appService.rows.forEach(x => {
      v += x.fact * x.success
    })

    if (!this.appService.playedHands) {
      return "";
    }

    v = v / this.appService.playedHands.length;

    return (v < 0 ? 'Failure ' : 'Success ') + v.toFixed(2) + '%';
  }

  get handsTotal(): string {
    return this.appService.playedHands ? this.appService.playedHands.length.toString() : "no hands";
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
    if (!this.appService.playedHands) {
      return;
    }

    let s: string = "";

    this.appService.playedHands.forEach(x => {
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


