import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReduceFloatPipe } from './helpers/pipes'

import { AppComponent } from './app.component';
import { ThumbComponent } from './components/thumb/thumb.component';
import { CardPadComponent } from './components/card-pad/card-pad.component';
import { HandsHistoryComponent } from './components/hands-history/hands-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HistoryItemComponent } from './components/history-item/history-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ReduceFloatPipe,
    ThumbComponent,
    CardPadComponent,
    HandsHistoryComponent,
    HistoryItemComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
