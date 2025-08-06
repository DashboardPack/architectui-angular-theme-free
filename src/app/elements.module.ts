import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

// Elements Components
import { StandardComponent } from './DemoPages/Elements/Buttons/standard/standard.component';
import { DropdownsComponent } from './DemoPages/Elements/dropdowns/dropdowns.component';
import { CardsComponent } from './DemoPages/Elements/cards/cards.component';
import { ListGroupsComponent } from './DemoPages/Elements/list-groups/list-groups.component';
import { TimelineComponent } from './DemoPages/Elements/timeline/timeline.component';
import { IconsComponent } from './DemoPages/Elements/icons/icons.component';

@NgModule({
  declarations: [
    StandardComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,
    IconsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    StandardComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,
    IconsComponent
  ]
})
export class ElementsModule { }