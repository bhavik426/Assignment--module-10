import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2assignment4Component } from './day2assignment4.component';

describe('Day2assignment4Component', () => {
  let component: Day2assignment4Component;
  let fixture: ComponentFixture<Day2assignment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2assignment4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2assignment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
