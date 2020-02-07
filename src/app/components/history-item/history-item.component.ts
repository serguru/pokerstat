import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  constructor(
    public appService: AppService
  ) { }

  @Input() index: number; 

  //hand: string;

  ngOnInit() {
    //  this.hand = this.appService.playedHands[this.index].toUpperCase();
  }


  get hand(): string {
    return this.appService.playedHands[this.index].toUpperCase();
  }

  onClick(): void {
    if (!this.hand) {
      return;
    }
    this.appService.playedHands.splice(this.index, 1);
    this.appService.handsToLocalStorage();
    this.appService.updateRows();

  }
}
