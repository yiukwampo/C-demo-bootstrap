import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../service/base/notiMsg.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpDataService } from '../service/base/httpData.service';
import { Blog } from '../datamapping/Blog';
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

  constructor(
    private router: Router,
    private blogService: BlogService,
    private http: HttpClient,

  ) {

  }

  ngOnInit(): void {
    this.http.get(window.location.protocol + '//' + window.location.hostname + ':8080/' + 'getAllBlogMessage', {}).subscribe((r: any) => {

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

}
