import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReduceFloatPipe } from './helpers/pipes'

import { AppComponent } from './app.component';
import { ThumbComponent } from './components/thumb/thumb.component';
import { CardPadComponent } from './components/card-pad/card-pad.component';
import { HandsHistoryComponent } from './components/hands-history/hands-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ReduceFloatPipe,
    ThumbComponent,
    CardPadComponent,
    HandsHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
