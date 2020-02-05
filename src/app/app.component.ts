import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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


  get overallResult(): string {
    let v: number = 0;
    this.appService.rows.forEach(x => {
      v += x.fact * x.success
    })

    if (!this.appService.playedHands || this.appService.playedHands.length == 0) {
      return "Success: unknown";
    }

    v = v / this.appService.playedHands.length;

    return (v < 0 ? 'Failure: ' : 'Success: ') + v.toFixed(2) + '%';
  }

  get handsTotal(): string {
    return this.appService.playedHands ? this.appService.playedHands.length.toString() : "no hands";
  }

  onFileOpen() {
    if (!this.file.nativeElement.files || this.file.nativeElement.files.length == 0) {
      return;
    }
    const fileContent = this.file.nativeElement.files[0];

    this.appService.processFile(fileContent);
  }

  selectFile() {
    this.file.nativeElement.click();
  }

  onSaveFileClick() {
    this.appService.saveFile();
  }


}


