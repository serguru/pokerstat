import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-hands-history',
  templateUrl: './hands-history.component.html',
  styleUrls: ['./hands-history.component.css']
})
export class HandsHistoryComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

}
