import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BlogService } from '../service/base/notiMsg.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpDataService } from '../service/base/httpData.service';
import { Blog } from '../datamapping/Blog';
import { DatePipe, Location } from '@angular/common';
import { ConstantsApi } from '../constants/constants-api';
@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css'],
  providers: [
    BlogService, HttpDataService
  ]
})
export class NoticeBoardComponent {
  selectedNoti: any = null;

  viewList = [] as Blog[];
  eventUrl!: string;

  constructor(
    public router: Router,
    private blogService: BlogService,
    private http: HttpClient,
    public location: Location,
  ) {
    router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {

        this.eventUrl = event['url'];

      }
  });
  }

  ngOnInit(): void {
    this.http.get(window.location.protocol + '//' + window.location.hostname + ConstantsApi.port + '/getAllBlogMessage', {}).subscribe((r: any) => {

        setTimeout(() => {
          this.viewList = r! as Blog[];
        }, 200);
      },
      (error: HttpErrorResponse) => {
        alert(JSON.stringify(error));
      });
  }

  click(row: Blog) {
    this.router.navigate(['edit/' + row?.messageId],
    {state : { messageId: row?.messageId}});
  }

  deleteAnnounce() {
    let messageIdList = [] as number[];
    this.viewList?.forEach((r: Blog) => {
      messageIdList.push(r?.messageId as number);
    })
    this.http.post(window.location.protocol + '//' + window.location.hostname + ConstantsApi.port + '/deleteAllByMessageIdList', messageIdList).subscribe((r: any) => {
        if (r) {
          setTimeout(() => {
           alert('Successfully deleted! ')
           window.location.reload();
          }, 200);
        }
      });
    }

    redirectTo(uri: string) {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
    }

}
