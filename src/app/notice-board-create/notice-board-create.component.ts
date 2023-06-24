import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import { BlogService } from '../service/base/notiMsg.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpDataService } from '../service/base/httpData.service';
import { Blog } from '../datamapping/Blog';
import { DatePipe, Location } from '@angular/common';
import { User } from '../datamapping/User';
@Component({
  selector: 'app-notice-board-create',
  templateUrl: './notice-board-create.component.html',
  styleUrls: ['./notice-board-create.component.css'],
  providers: [
    BlogService, HttpDataService, DatePipe
  ],
})
export class NoticeBoardCreateComponent {

  constructor(
    private router: Router,
    public  location: Location,
    private datePipe: DatePipe,
    private blogService: BlogService,
    private http: HttpClient,
    private httpDataService: HttpDataService
    ) {

    }

  messageId: any;
  title: string | undefined = '';
  announceContent: string | undefined;
	date1: NgbDateStruct | undefined;
	date2: NgbDateStruct | undefined;
  userId: number | undefined;
  userPost: string | undefined;

  create() {
    let day1 =
     this.date1?.year + '-' +
     (this.date1?.month?.toString()?.trim().length == 1 ? '0' + this.date1?.month : this.date1?.month) + '-' +
     (this.date1?.day?.toString()?.trim().length == 1 ? '0' + this.date1?.day : this.date1?.day)
    let day2 =
    this.date2?.year + '-' +
    (this.date2?.month?.toString()?.trim().length == 1 ? '0' + this.date2?.month : this.date2?.month) + '-' +
    (this.date2?.day?.toString()?.trim().length == 1 ? '0' + this.date2?.day : this.date2?.day)
     let obj = {
       messageId: this.messageId,
       title: this.title,
       announceContent: this.announceContent,
       announceDateStr: this.date1 ? day1: null,
       expiryDateStr: this.date2 ? day2: null,
     };
     if (!this.date1 || !this.date2) {
       alert('請填寫發佈日期及截止日期!')
       return;
     }
     alert(JSON.stringify(obj));

  }
}

