import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

// Dashboard Components
import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';

@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AnalyticsComponent
  ]
})
export class DashboardsModule { }