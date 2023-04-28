import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2assignment5Component } from './day2assignment5.component';

describe('Day2assignment5Component', () => {
  let component: Day2assignment5Component;
  let fixture: ComponentFixture<Day2assignment5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2assignment5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2assignment5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
