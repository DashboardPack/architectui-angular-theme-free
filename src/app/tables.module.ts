import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

// Table Components
import { RegularComponent } from './DemoPages/Tables/regular/regular.component';
import { TablesMainComponent } from './DemoPages/Tables/tables-main/tables-main.component';

@NgModule({
  declarations: [
    RegularComponent,
    TablesMainComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    RegularComponent,
    TablesMainComponent
  ]
})
export class TablesModule { }