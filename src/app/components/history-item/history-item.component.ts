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

  @Input() handIndex: number; // showed array is reverted

  hand: string;

  ngOnInit() {
      this.hand = this.appService.playedHands[this.handIndex].toUpperCase();
  }


  get index(): number {
    return this.appService.playedHands.length - this.handIndex - 1;
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
