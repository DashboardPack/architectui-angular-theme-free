import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

// Form Components
import { ControlsComponent } from './DemoPages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './DemoPages/Forms/Elements/layout/layout.component';

@NgModule({
  declarations: [
    ControlsComponent,
    LayoutComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ControlsComponent,
    LayoutComponent
  ]
})
export class FormPagesModule { }