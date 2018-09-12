import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABtnMediumComponent } from './a-btn-medium.component';

describe('ABtnMediumComponent', () => {
  let component: ABtnMediumComponent;
  let fixture: ComponentFixture<ABtnMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABtnMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABtnMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
