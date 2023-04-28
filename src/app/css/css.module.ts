import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css/css.component';
import { Day1Component } from './css/day1/day1.component';
import { Day2Component } from './css/day2/day2.component';
import { Assignment1Component } from './css/day1/assignment1/assignment1.component';
import { Assignment2Component } from './css/day1/assignment2/assignment2.component';
import { Day2assignment1Component } from './css/day2/day2assignment1/day2assignment1.component';
import { Day2assignment2Component } from './css/day2/day2assignment2/day2assignment2.component';
import { Day2assignment3Component } from './css/day2/day2assignment3/day2assignment3.component';
import { Day2assignment4Component } from './css/day2/day2assignment4/day2assignment4.component';
import { Day2assignment5Component } from './css/day2/day2assignment5/day2assignment5.component';
import { Day2assignment6Component } from './css/day2/day2assignment6/day2assignment6.component';


@NgModule({
  declarations: [
    CssComponent,
    Day1Component,
    Day2Component,
    Assignment1Component,
    Assignment2Component,
    Day2assignment1Component,
    Day2assignment2Component,
    Day2assignment3Component,
    Day2assignment4Component,
    Day2assignment5Component,
    Day2assignment6Component
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
