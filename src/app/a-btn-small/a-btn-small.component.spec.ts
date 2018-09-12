import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABtnSmallComponent } from './a-btn-small.component';

describe('ABtnSmallComponent', () => {
  let component: ABtnSmallComponent;
  let fixture: ComponentFixture<ABtnSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABtnSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABtnSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
