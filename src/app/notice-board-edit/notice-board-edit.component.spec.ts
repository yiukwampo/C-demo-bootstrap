import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardEditComponent } from './notice-board-edit.component';

describe('NoticeBoardEditComponent', () => {
  let component: NoticeBoardEditComponent;
  let fixture: ComponentFixture<NoticeBoardEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeBoardEditComponent]
    });
    fixture = TestBed.createComponent(NoticeBoardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
