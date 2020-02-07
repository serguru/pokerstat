import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { suites, ranks } from '../../helpers/consts';

@Component({
  selector: 'app-card-pad',
  templateUrl: './card-pad.component.html',
  styleUrls: ['./card-pad.component.css']
})
export class CardPadComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  get suites() {
    return suites;
  }

  get ranks() {
    return ranks;
  }


}
