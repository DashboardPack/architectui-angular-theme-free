import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { configReducer } from './ThemeOptions/store/config.reducer.ngrx';
import { ConfigService } from './ThemeOptions/store/config.service';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {SimpleDashboardComponent} from './simple-dashboard.component';

// BOOTSTRAP COMPONENTS
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

const routes = [
  {
    path: '',
    component: SimpleDashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleDashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    StoreModule.forRoot({ config: configReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ConfigService,
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class MinimalAppModule { }