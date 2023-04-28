import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { Day1Component } from './html/day1/day1.component';
import { Assignment1Component } from './html/day1/assignment1/assignment1.component';
import { Assignment2Component } from './html/day1/assignment2/assignment2.component';

const routes: Routes = [
  {
    path: '', component: HtmlComponent, children: [
      {
        path: 'day1', component: Day1Component, children: [
          {
            path:'', redirectTo:'/html/day1/assignment1',pathMatch:'full'
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
        path:'', redirectTo:'/html/day1/assignment1',pathMatch:'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
