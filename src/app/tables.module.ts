import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Table Components
import { RegularComponent } from './DemoPages/Tables/regular/regular.component';
import { TablesMainComponent } from './DemoPages/Tables/tables-main/tables-main.component';

const routes = [
  { path: 'tables/regular', component: RegularComponent, data: { extraParameter: 'tablesMenu' } },
  { path: 'tables/bootstrap', component: TablesMainComponent, data: { extraParameter: 'tablesMenu' } }
];

@NgModule({
  declarations: [
    RegularComponent,
    TablesMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RegularComponent,
    TablesMainComponent
  ]
})
export class TablesModule { }