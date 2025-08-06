import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { BaseChartDirective } from 'ng2-charts';

// Widget Components
import { ChartBoxes3Component } from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

@NgModule({
  declarations: [
    ChartBoxes3Component
  ],
  imports: [
    SharedModule,
    BaseChartDirective
  ],
  exports: [
    ChartBoxes3Component
  ]
})
export class WidgetsModule { }