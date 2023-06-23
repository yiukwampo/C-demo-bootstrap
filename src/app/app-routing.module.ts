import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { NoticeBoardEditComponent } from './notice-board-edit/notice-board-edit.component';

const routes: Routes = [
  {
    path: "",
    component: NoticeBoardComponent,
  },
  {
    path: "edit/:id",
    component: NoticeBoardEditComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
