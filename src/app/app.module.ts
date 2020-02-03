import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReduceFloatPipe } from './helpers/pipes'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ReduceFloatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
