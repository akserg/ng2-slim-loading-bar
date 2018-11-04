import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlimLoadingBarLibModule } from 'slim-loading-bar-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SlimLoadingBarLibModule,
    /*SlimLoadingBarModule,*/
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
