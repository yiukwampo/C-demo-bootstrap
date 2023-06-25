import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import { BlogService } from '../service/base/notiMsg.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpDataService } from '../service/base/httpData.service';
import { Blog } from '../datamapping/Blog';
import { DatePipe, Location } from '@angular/common';
import { User, UserPostDropdownList } from '../datamapping/User';
import { ConstantsApi } from '../constants/constants-api';
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

  userList: UserPostDropdownList[] = []; selectedUser!: number;
  messageId: any;
  title: string | undefined = '';
  announceContent: string | undefined;
	date1: NgbDateStruct | undefined;
	date2: NgbDateStruct | undefined;
  userId: number | undefined;
  userPost: string | undefined;
	selectedTeam = '';


  ngOnInit(): void {
    this.httpDataService.get(window.location.protocol + '//' + window.location.hostname + ConstantsApi.port + '/getUserDropdownList ', {}).subscribe((r: UserPostDropdownList[]) => {
      if (r) {
        setTimeout(() => {
          this.userList = r;
        }, 200);
      }
    });
  }

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
       userId: this.selectedUser,
       title: this.title,
       announceContent: this.announceContent,
       announceDateStr: this.date1 ? day1: null,
       expiryDateStr: this.date2 ? day2: null,
     };
     if (this.title?.trim()?.length == 0 || !this.date1 || !this.date2 || !this.selectedUser || this.announceContent?.trim()?.length == 0) {
       alert('請填寫所有欄位!')
       return;
      }
      // alert(this.selectedUser)
      // alert(JSON.stringify(obj));
     this.httpDataService.post(window.location.protocol + '//' + window.location.hostname + ConstantsApi.port + '/createBlogMessage ', obj).subscribe((r: any) => {
        if (r) {
          setTimeout(() => {
           alert('Successfully update! ')
          }, 200);
        }
      },
      (error: HttpErrorResponse) => {
        alert(JSON.stringify(error));
      });
  }
}

