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
export class AppComponent implements OnInit {

  constructor(public appService: AppService) {
    this.appService.updateRows();
  }

  @ViewChild('file', { static: false }) file;

  ngOnInit(): void {
    this.appService.handsFromLocalStorage();
  }

  get overallResult(): string {

    const s: number = this.appService.success;

    if (s == undefined) {
      return "unknown";
    }

    return s.toFixed(2) + '%';
  }

  get sf(): string {
    const s: number = this.appService.success;
    return s < 0 ? "Failure" : "Success"
  }

  get handsTotal(): string {
    return this.appService.playedHands ? this.appService.playedHands.length.toString() : "no hands";
  }

  onResetHandsClick(): void {
    this.appService.resetHands();
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


