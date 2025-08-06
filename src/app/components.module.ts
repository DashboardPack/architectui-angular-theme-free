import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Component imports
import { CarouselComponent } from './DemoPages/Components/carousel/carousel.component';
import { ModalsComponent } from './DemoPages/Components/modals/modals.component';
import { PaginationComponent } from './DemoPages/Components/pagination/pagination.component';
import { ProgressBarComponent } from './DemoPages/Components/progress-bar/progress-bar.component';
import { TooltipsPopoversComponent } from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

const routes = [
  { path: 'components/carousel', component: CarouselComponent, data: { extraParameter: 'componentsMenu' } },
  { path: 'components/modals', component: ModalsComponent, data: { extraParameter: 'componentsMenu' } },
  { path: 'components/pagination', component: PaginationComponent, data: { extraParameter: 'componentsMenu' } },
  { path: 'components/progress-bar', component: ProgressBarComponent, data: { extraParameter: 'componentsMenu' } },
  { path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: { extraParameter: 'componentsMenu' } }
];

@NgModule({
  declarations: [
    CarouselComponent,
    ModalsComponent,
    PaginationComponent,
    ProgressBarComponent,
    TooltipsPopoversComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CarouselComponent,
    ModalsComponent,
    PaginationComponent,
    ProgressBarComponent,
    TooltipsPopoversComponent
  ]
})
export class ComponentsModule { }