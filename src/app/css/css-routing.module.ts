import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { Day1Component } from './css/day1/day1.component';
import { Day2Component } from './css/day2/day2.component';
import { Assignment1Component } from './css/day1/assignment1/assignment1.component';
import { Assignment2Component } from './css/day1/assignment2/assignment2.component';
import { Day2assignment1Component } from './css/day2/day2assignment1/day2assignment1.component';
import { Day2assignment2Component } from './css/day2/day2assignment2/day2assignment2.component';
import { Day2assignment3Component } from './css/day2/day2assignment3/day2assignment3.component';
import { Day2assignment6Component } from './css/day2/day2assignment6/day2assignment6.component';
import { Day2assignment4Component } from './css/day2/day2assignment4/day2assignment4.component';
import { Day2assignment5Component } from './css/day2/day2assignment5/day2assignment5.component';

const routes: Routes = [
  {
    path: '', component: CssComponent,
    children: [
      {
        path: 'day1', component: Day1Component, children: [
          {
            path: '', redirectTo: '/css/day1/assignment1', pathMatch: 'full'
          },
          {
            path: 'assignment1', component: Assignment1Component
          },
          {
            path: 'assignment2', component: Assignment2Component
          }
        ]
      },
      {
        path: 'day2', component: Day2Component, children: [
          {
            path: '', redirectTo: '/css/day2/assignment1', pathMatch: 'full'
          },
          {
            path: 'assignment1', component: Day2assignment1Component
          },
          {
            path: 'assignment2', component: Day2assignment2Component
          },
          {
            path: 'assignment3', component: Day2assignment3Component
          },
          {
            path: 'assignment4', component: Day2assignment4Component
          },
          {
            path: 'assignment5', component: Day2assignment5Component
          },
          {
            path: 'assignment6', component: Day2assignment6Component
          }
        ]
      },
      {
        path: '', redirectTo: '/css/day1/assignment1', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
