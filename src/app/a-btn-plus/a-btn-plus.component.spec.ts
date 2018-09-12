import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABtnPlusComponent } from './a-btn-plus.component';

describe('ABtnPlusComponent', () => {
  let component: ABtnPlusComponent;
  let fixture: ComponentFixture<ABtnPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABtnPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABtnPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
