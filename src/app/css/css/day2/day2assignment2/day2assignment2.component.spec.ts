import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2assignment2Component } from './day2assignment2.component';

describe('Day2assignment2Component', () => {
  let component: Day2assignment2Component;
  let fixture: ComponentFixture<Day2assignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2assignment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2assignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
