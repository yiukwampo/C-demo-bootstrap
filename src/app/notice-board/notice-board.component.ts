import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css'],
})
export class NoticeBoardComponent {
  selectedNoti: any = null;

  viewList =
  [
      {
          "windowId": 1,
          "title": 1,
          "announceDate": "test1",
          "expiryDate": "$1"
      },
      {
          "windowId": 2,
          "title": 2,
          "announceDate": "test2",
          "expiryDate": "$2"
      }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  click(row: any) {
    //alert(row?.title + ' ' + row?.announceDate + ' ' + row?.expiryDate)
    this.router.navigate(['edit/' + row?.windowId],
    {state : { windowId: row?.windowId}});
  }

}
