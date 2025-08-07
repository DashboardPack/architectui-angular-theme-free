import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { configReducer } from './ThemeOptions/store/config.reducer.ngrx';
import { ConfigService } from './ThemeOptions/store/config.service';
import { environment } from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Feature Modules
import { FormPagesModule } from './forms.module';
import { TablesModule } from './tables.module';
import { WidgetsModule } from './widgets.module';
import { ComponentsModule } from './components.module';
import { DashboardsModule } from './dashboards.module';
import { ElementsModule } from './elements.module';
import { UserPagesModule } from './user-pages.module';
import { ChartsModule } from './charts.module';
import { SharedModule } from './shared.module';

// LAYOUT
import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

// HEADER
import {HeaderComponent} from './Layout/Components/header/header.component';
import {SearchBoxComponent} from './Layout/Components/header/elements/search-box/search-box.component';
import {UserBoxComponent} from './Layout/Components/header/elements/user-box/user-box.component';
import {NotificationsBoxComponent} from './Layout/Components/header/elements/notifications-box/notifications-box';
import {MessagesBoxComponent} from './Layout/Components/header/elements/messages-box/messages-box';

// SIDEBAR
import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';
import {LogoComponent} from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER
import {FooterComponent} from './Layout/Components/footer/footer.component';

// All component imports are handled by feature modules

// ThemeOptions
import {ThemeOptions} from './theme-options';

@NgModule({
  declarations: [
    // LAYOUT
    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,

    // HEADER
    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,
    NotificationsBoxComponent,
    MessagesBoxComponent,

    // SIDEBAR
    SidebarComponent,
    LogoComponent,

    // FOOTER
    FooterComponent,

    // All page components are declared in feature modules
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ config: configReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CommonModule,

    // Angular Bootstrap Components
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Feature Modules
    SharedModule,
    DashboardsModule,
    ElementsModule,
    UserPagesModule,
    ChartsModule, // Re-enabled - ng2-charts v6 compatibility confirmed
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