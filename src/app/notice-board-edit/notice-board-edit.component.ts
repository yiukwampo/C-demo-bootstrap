import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-notice-board-edit',
  templateUrl: './notice-board-edit.component.html',
  styleUrls: ['./notice-board-edit.component.css'],
})
export class NoticeBoardEditComponent {
	date1: NgbDateStruct | undefined;
	date2: NgbDateStruct | undefined;

  constructor(
    private router: Router,) {
      var param = this.router.getCurrentNavigation()?.extras?.state?.['windowId'];
      alert(param);
    }

}
