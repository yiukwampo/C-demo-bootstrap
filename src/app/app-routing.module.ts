import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { NoticeBoardEditComponent } from './notice-board-edit/notice-board-edit.component';
import { NoticeBoardCreateComponent } from './notice-board-create/notice-board-create.component';

const routes: Routes = [
  {
    path: "",
    component: NoticeBoardComponent,
  },
  {
    path: "edit/:id",
    component: NoticeBoardEditComponent,
  },
  {
    path: "create",
    component: NoticeBoardCreateComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
