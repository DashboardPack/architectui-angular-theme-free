import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  template: `
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-car icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Analytics Dashboard
            <div class="page-title-subheading">
              Welcome to ArchitectUI Angular Theme - Successfully Running on Angular 20!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">App is Running!</h5>
            <p>The Angular 20 migration is partially complete. The app structure is working.</p>
            <p>Note: Many components have been temporarily disabled due to compilation issues. These will need to be migrated individually.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent { }

const routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
