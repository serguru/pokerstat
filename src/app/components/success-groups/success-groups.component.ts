import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-success-groups',
  templateUrl: './success-groups.component.html',
  styleUrls: ['./success-groups.component.css']
})
export class SuccessGroupsComponent implements OnInit {

  constructor(
    public appService: AppService
  ) { }

  ngOnInit() {
  }

}
