import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiPopComponent } from './noti-pop.component';

describe('NotiPopComponent', () => {
  let component: NotiPopComponent;
  let fixture: ComponentFixture<NotiPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiPopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
