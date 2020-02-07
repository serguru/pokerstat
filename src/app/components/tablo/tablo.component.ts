import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-tablo',
  templateUrl: './tablo.component.html',
  styleUrls: ['./tablo.component.css']
})
export class TabloComponent implements OnInit {

  constructor(
    public appService: AppService    
  ) { }

  ngOnInit() {
  }

  get sf(): string {
    const s: number = this.appService.success;
    return s < 0 ? "Failure" : "Success"
  }

  get handsTotal(): string {
    return this.appService.playedHands ? this.appService.playedHands.length.toString() : "no hands";
  }

  get overallResult(): string {

    const s: number = this.appService.success;

    if (s == undefined) {
      return "unknown";
    }
    return s.toFixed(2) + '%';
  }
}
