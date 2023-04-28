import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2assignment1Component } from './day2assignment1.component';

describe('Day2assignment1Component', () => {
  let component: Day2assignment1Component;
  let fixture: ComponentFixture<Day2assignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2assignment1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2assignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
