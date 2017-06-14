import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { APIService } from './api.service';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
