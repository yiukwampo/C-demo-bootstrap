import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardCreateComponent } from './notice-board-create.component';

describe('NoticeBoardCreateComponent', () => {
  let component: NoticeBoardCreateComponent;
  let fixture: ComponentFixture<NoticeBoardCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeBoardCreateComponent]
    });
    fixture = TestBed.createComponent(NoticeBoardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
