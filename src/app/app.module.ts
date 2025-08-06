import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { configReducer } from './ThemeOptions/store/config.reducer.ngrx';
import { ConfigService } from './ThemeOptions/store/config.service';
import { environment } from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {LoadingBarModule} from '@ngx-loading-bar/core';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Feature Modules
import { ChartsModule } from './charts.module';
import { FormPagesModule } from './forms.module';
import { TablesModule } from './tables.module';
import { WidgetsModule } from './widgets.module';
import { ComponentsModule } from './components.module';

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

// DEMO PAGES

// Dashboards
import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

// Pages
import {ForgotPasswordBoxedComponent} from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './DemoPages/UserPages/login-boxed/login-boxed.component';
import {RegisterBoxedComponent} from './DemoPages/UserPages/register-boxed/register-boxed.component';

// Elements
import {StandardComponent} from './DemoPages/Elements/Buttons/standard/standard.component';
import {DropdownsComponent} from './DemoPages/Elements/dropdowns/dropdowns.component';
import {CardsComponent} from './DemoPages/Elements/cards/cards.component';
import {ListGroupsComponent} from './DemoPages/Elements/list-groups/list-groups.component';
import {TimelineComponent} from './DemoPages/Elements/timeline/timeline.component';
import {IconsComponent} from './DemoPages/Elements/icons/icons.component';

// Components
import {AccordionsComponent} from './DemoPages/Components/accordions/accordions.component';
import {TabsComponent} from './DemoPages/Components/tabs/tabs.component';

// ThemeOptions
import {ThemeOptions} from './theme-options';

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

    // DEMO PAGES

    // Dashboards
    AnalyticsComponent,

    // User Pages
    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent,

    // Elements
    StandardComponent,
    IconsComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,

    // Components
    AccordionsComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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

    // Feature Modules
    ChartsModule,
    FormPagesModule,
    TablesModule,
    WidgetsModule,
    ComponentsModule,
  ],
  providers: [
    ConfigService,
    ThemeOptions,
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }