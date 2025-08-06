import { NgModule } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { SharedModule } from './shared.module';

// Chart Components
import { ChartjsComponent } from './DemoPages/Charts/chartjs/chartjs.component';
import { LineChartComponent } from './DemoPages/Charts/chartjs/examples/line-chart/line-chart.component';
import { BarChartComponent } from './DemoPages/Charts/chartjs/examples/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './DemoPages/Charts/chartjs/examples/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './DemoPages/Charts/chartjs/examples/radar-chart/radar-chart.component';
import { PieChartComponent } from './DemoPages/Charts/chartjs/examples/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './DemoPages/Charts/chartjs/examples/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './DemoPages/Charts/chartjs/examples/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './DemoPages/Charts/chartjs/examples/scatter-chart/scatter-chart.component';
import { DynamicChartComponent } from './DemoPages/Charts/chartjs/examples/dynamic-chart/dynamic-chart.component';

@NgModule({
  declarations: [
    ChartjsComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    DynamicChartComponent
  ],
  imports: [
    SharedModule,
    BaseChartDirective
  ],
  exports: [
    ChartjsComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    DynamicChartComponent
  ]
})
export class ChartsModule { }