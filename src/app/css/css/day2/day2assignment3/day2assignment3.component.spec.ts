import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2assignment3Component } from './day2assignment3.component';

describe('Day2assignment3Component', () => {
  let component: Day2assignment3Component;
  let fixture: ComponentFixture<Day2assignment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2assignment3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2assignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
