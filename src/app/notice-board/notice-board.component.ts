import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent {
  selectedNoti: any = null;

  viewList =
  [
      {
          "title": 0,
          "announceDate": "test0",
          "expiryDate": "$0"
      },
      {
          "title": 1,
          "announceDate": "test1",
          "expiryDate": "$1"
      },
      {
          "title": 2,
          "announceDate": "test2",
          "expiryDate": "$2"
      },
      {
          "title": 3,
          "announceDate": "test3",
          "expiryDate": "$3"
      },
      {
          "title": 4,
          "announceDate": "test4",
          "expiryDate": "$4"
      },
      {
          "title": 5,
          "announceDate": "test5",
          "expiryDate": "$5"
      },
      {
          "title": 6,
          "announceDate": "test6",
          "expiryDate": "$6"
      },
      {
          "title": 7,
          "announceDate": "test7",
          "expiryDate": "$7"
      },
      {
          "title": 8,
          "announceDate": "test8",
          "expiryDate": "$8"
      },
      {
          "title": 9,
          "announceDate": "test9",
          "expiryDate": "$9"
      },
      {
          "title": 10,
          "announceDate": "test10",
          "expiryDate": "$10"
      }
  ];

  ngOnInit(): void {

  }

}
