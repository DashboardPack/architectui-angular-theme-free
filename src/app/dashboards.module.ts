import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { BaseChartDirective } from 'ng2-charts';

// Dashboard Components
import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';

@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    SharedModule,
    BaseChartDirective
  ],
  exports: [
    AnalyticsComponent
  ]
})
export class DashboardsModule { }