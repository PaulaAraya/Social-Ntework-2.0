import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AImgMainComponent } from './a-img-main.component';

describe('AImgMainComponent', () => {
  let component: AImgMainComponent;
  let fixture: ComponentFixture<AImgMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AImgMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AImgMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
