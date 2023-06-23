import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { NoticeBoardEditComponent } from './notice-board-edit/notice-board-edit.component';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NoticeBoardComponent,
    NoticeBoardEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
