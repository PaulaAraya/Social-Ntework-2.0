import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AImgUserComponent } from './a-img-user.component';

describe('AImgUserComponent', () => {
  let component: AImgUserComponent;
  let fixture: ComponentFixture<AImgUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AImgUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AImgUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
