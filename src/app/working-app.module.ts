import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { configReducer } from './ThemeOptions/store/config.reducer.ngrx';
import { ConfigService } from './ThemeOptions/store/config.service';
import { environment } from '../environments/environment';
import {Routes, RouterModule} from '@angular/router';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {LoadingBarModule} from '@ngx-loading-bar/core';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// LAYOUT
import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';
import {PageTitleComponent} from './Layout/Components/page-title/page-title.component';

// HEADER
import {HeaderComponent} from './Layout/Components/header/header.component';
import {SearchBoxComponent} from './Layout/Components/header/elements/search-box/search-box.component';
import {UserBoxComponent} from './Layout/Components/header/elements/user-box/user-box.component';

// SIDEBAR
import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';
import {LogoComponent} from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER
import {FooterComponent} from './Layout/Components/footer/footer.component';

// Simple Dashboard
import {SimpleDashboardComponent} from './simple-dashboard.component';

// Analytics Dashboard
import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

// Elements
import {StandardComponent} from './DemoPages/Elements/Buttons/standard/standard.component';
import {DropdownsComponent} from './DemoPages/Elements/dropdowns/dropdowns.component';
import {CardsComponent} from './DemoPages/Elements/cards/cards.component';
import {ListGroupsComponent} from './DemoPages/Elements/list-groups/list-groups.component';
import {TimelineComponent} from './DemoPages/Elements/timeline/timeline.component';
import {IconsComponent} from './DemoPages/Elements/icons/icons.component';

// Components  
// import {AccordionsComponent} from './DemoPages/Components/accordions/accordions.component';
import {TabsComponent} from './DemoPages/Components/tabs/tabs.component';
// import {ModalsComponent} from './DemoPages/Components/modals/modals.component';
import {CarouselComponent} from './DemoPages/Components/carousel/carousel.component';
import {PaginationComponent} from './DemoPages/Components/pagination/pagination.component';
// import {ProgressBarComponent} from './DemoPages/Components/progress-bar/progress-bar.component';
import {TooltipsPopoversComponent} from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Forms
import {ControlsComponent} from './DemoPages/Forms/Elements/controls/controls.component';
import {LayoutComponent} from './DemoPages/Forms/Elements/layout/layout.component';

// Tables
import {RegularComponent} from './DemoPages/Tables/regular/regular.component';
import {TablesMainComponent} from './DemoPages/Tables/tables-main/tables-main.component';

// Charts
import {ChartjsComponent} from './DemoPages/Charts/chartjs/chartjs.component';
// Temporarily removed chart examples to fix build
// import {LineChartComponent} from './DemoPages/Charts/chartjs/examples/line-chart/line-chart.component';
// import {BarChartComponent} from './DemoPages/Charts/chartjs/examples/bar-chart/bar-chart.component';
// import {DoughnutChartComponent} from './DemoPages/Charts/chartjs/examples/doughnut-chart/doughnut-chart.component';
// import {DynamicChartComponent} from './DemoPages/Charts/chartjs/examples/dynamic-chart/dynamic-chart.component';
// import {BubbleChartComponent} from './DemoPages/Charts/chartjs/examples/bubble-chart/bubble-chart.component';

// Widgets
import {ChartBoxes3Component} from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Charts
import { provideCharts, withDefaultRegisterables, BaseChartDirective } from 'ng2-charts';

// ThemeOptions
import {ThemeOptions} from './theme-options';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: '', redirectTo: '/dashboards/analytics', pathMatch: 'full'},
      {path: 'dashboard', component: SimpleDashboardComponent, data: {extraParameter: 'dashboardsMenu'}},
      {path: 'dashboards/analytics', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'}},

      // Elements
      {path: 'elements/buttons-standard', component: StandardComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/dropdowns', component: DropdownsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/icons', component: IconsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/cards', component: CardsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/list-group', component: ListGroupsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/timeline', component: TimelineComponent, data: {extraParameter: 'elementsMenu'}},

      // Components
      {path: 'components/tabs', component: TabsComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/accordions', component: AccordionsComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/modals', component: ModalsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/carousel', component: CarouselComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/pagination', component: PaginationComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/progress-bar', component: ProgressBarComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: {extraParameter: 'componentsMenu'}},

      // Forms
      {path: 'forms/controls', component: ControlsComponent, data: {extraParameter: 'formsMenu'}},
      {path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formsMenu'}},

      // Tables  
      {path: 'tables/regular', component: RegularComponent, data: {extraParameter: 'tablesMenu'}},
      {path: 'tables/tables-main', component: TablesMainComponent, data: {extraParameter: 'tablesMenu'}},

      // Charts
      {path: 'charts/chartjs', component: ChartjsComponent, data: {extraParameter: 'chartsMenu'}},

      // Widgets
      {path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: {extraParameter: 'widgetsMenu'}},
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    // LAYOUT
    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,

    // HEADER
    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,

    // SIDEBAR
    SidebarComponent,
    LogoComponent,

    // FOOTER
    FooterComponent,

    // Simple Dashboard
    SimpleDashboardComponent,

    // Analytics Dashboard
    AnalyticsComponent,

    // Elements
    StandardComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,
    IconsComponent,

    // Components
    // AccordionsComponent,
    TabsComponent,
    // ModalsComponent,
    CarouselComponent,
    PaginationComponent,
    // ProgressBarComponent,
    TooltipsPopoversComponent,

    // Forms
    ControlsComponent,
    LayoutComponent,

    // Tables
    RegularComponent,
    TablesMainComponent,

    // Charts
    ChartjsComponent,
    // LineChartComponent,
    // BarChartComponent,
    // DoughnutChartComponent,
    // DynamicChartComponent,
    // BubbleChartComponent,

    // Widgets
    ChartBoxes3Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    BrowserAnimationsModule,
    StoreModule.forRoot({ config: configReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CommonModule,
    LoadingBarRouterModule,
    LoadingBarModule,

    // Angular Bootstrap Components
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    // Charts
    BaseChartDirective,
  ],
  providers: [
    ConfigService,
    ThemeOptions,
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent]
})

export class WorkingAppModule { }