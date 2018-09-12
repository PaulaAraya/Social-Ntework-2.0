import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABtnLargeComponent } from './a-btn-large.component';

describe('ABtnLargeComponent', () => {
  let component: ABtnLargeComponent;
  let fixture: ComponentFixture<ABtnLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABtnLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABtnLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
