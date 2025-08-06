import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Form Components
import { ControlsComponent } from './DemoPages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './DemoPages/Forms/Elements/layout/layout.component';

const routes = [
  { path: 'forms/controls', component: ControlsComponent, data: { extraParameter: 'formsMenu' } },
  { path: 'forms/layouts', component: LayoutComponent, data: { extraParameter: 'formsMenu' } }
];

@NgModule({
  declarations: [
    ControlsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ControlsComponent,
    LayoutComponent
  ]
})
export class FormPagesModule { }