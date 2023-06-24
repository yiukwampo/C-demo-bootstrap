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
  selector: 'app-notice-board-edit',
  templateUrl: './notice-board-edit.component.html',
  styleUrls: ['./notice-board-edit.component.css'],
  providers: [
    BlogService, HttpDataService, DatePipe
  ]
})
export class NoticeBoardEditComponent {
  messageId: any;
  title: string | undefined = '';
  announceContent: string | undefined;
	date1: NgbDateStruct | undefined;
	date2: NgbDateStruct | undefined;
  userId: number | undefined;
  userPost: string | undefined;

  constructor(
    private router: Router,
    public  location: Location,
    private datePipe: DatePipe,
    private blogService: BlogService,
    private http: HttpClient,
    private httpDataService: HttpDataService
    ) {
      this.messageId = this.router.getCurrentNavigation()?.extras?.state?.['messageId'];
      //alert(window.location.protocol + '//' + window.location.hostname + ':8080/' + 'getContentByMessageId/' + this.messageId)
      this.http.get(window.location.protocol + '//' + window.location.hostname + ':8080/' + 'getContentByMessageId/' + this.messageId, {}).subscribe((r: Blog) => {

        setTimeout(() => {
          // alert(JSON.stringify(r));
          this.userId = r?.userId;
          this.http.get(window.location.protocol + '//' + window.location.hostname + ':8080/' + 'getUserByUserId/' + this.userId, {}).subscribe((u: User) => {
            setTimeout(() => {
              // alert(u?.userPost);
              this.userPost = u?.userPost;
            }, 200);
          });
          this.title = r?.title;
          //this.date1 = r.announceDate ? this.datePipe.transform(r.announceDate, 'yyyy-MM-dd') : null;
          //const obj = { year: r?.announceDate?.getFullYear(), month: r?.announceDate?.getMonth(), day: r?.announceDate?.getDate() };
           // alert(this.datePipe.transform(r?.announceDate, 'yyyy-MM-dd'));
            let day1 = this.datePipe.transform(r?.announceDate, 'yyyy-MM-dd') as string;
            const [year, month, day] = day1.split('-');
            const announceDateObj = { year: parseInt(year), month: parseInt(month), day:
              parseInt(day.split(' ')[0].trim()) };
            this.date1 = announceDateObj;

            let day2 = this.datePipe.transform(r?.expiryDate, 'yyyy-MM-dd') as string;
            const [year_, month_, day_] = day2.split('-');
            const expiryDateObj = { year: parseInt(year_), month: parseInt(month_), day:
              parseInt(day_.split(' ')[0].trim()) };
            this.date2 = expiryDateObj;

            this.announceContent = r?.announceContent;

        }, 200);
      },
      (error: HttpErrorResponse) => {
        alert(JSON.stringify(error));
      });

    }

    ngOnInit(): void {
//      this.title = 'r?.title';

    }

    update() {
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
      // alert(JSON.stringify(obj))
      this.httpDataService.post(window.location.protocol + '//' + window.location.hostname + ':8080/' + 'updateBlogMessage', obj).subscribe((r: any) => {
        if (r) {
          setTimeout(() => {
           alert('Success!_+')
          }, 200);
        }
      });
    }


}
