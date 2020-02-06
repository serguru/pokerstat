import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent implements OnInit {

  constructor(public appService: AppService) { }

  @Input() suit: string;
  @Input() rank: string;

  ngOnInit() {
  }


  public wrapperClass(): any {
    return {
      'wrapper': true,
      'selected': this.appService.selected.find(x => x == this)
    };
  }

  onClick() {
    this.appService.addHandByThumb(this);
  }


  get handStr(): string {
    return this.rank + this.suit;
  }

}
