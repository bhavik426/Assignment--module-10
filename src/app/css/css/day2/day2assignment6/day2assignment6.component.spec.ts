import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2assignment6Component } from './day2assignment6.component';

describe('Day2assignment6Component', () => {
  let component: Day2assignment6Component;
  let fixture: ComponentFixture<Day2assignment6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2assignment6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2assignment6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
