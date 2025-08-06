import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Widget Components
import { ChartBoxes3Component } from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

const routes = [
  { path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: { extraParameter: 'widgetsMenu' } }
];

@NgModule({
  declarations: [
    ChartBoxes3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ChartBoxes3Component
  ]
})
export class WidgetsModule { }