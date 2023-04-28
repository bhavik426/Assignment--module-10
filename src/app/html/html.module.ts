import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html/html.component';
import { Day1Component } from './html/day1/day1.component';
import { Assignment1Component } from './html/day1/assignment1/assignment1.component';
import { Assignment2Component } from './html/day1/assignment2/assignment2.component';


@NgModule({
  declarations: [
    HtmlComponent,
    Day1Component,
    Assignment1Component,
    Assignment2Component
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
