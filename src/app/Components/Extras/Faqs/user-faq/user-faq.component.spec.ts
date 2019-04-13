import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFaqComponent } from './user-faq.component';

describe('UserFaqComponent', () => {
  let component: UserFaqComponent;
  let fixture: ComponentFixture<UserFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFaqComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
