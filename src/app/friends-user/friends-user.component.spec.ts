import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsUserComponent } from './friends-user.component';

describe('FriendsUserComponent', () => {
  let component: FriendsUserComponent;
  let fixture: ComponentFixture<FriendsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
