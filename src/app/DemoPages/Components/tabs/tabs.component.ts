import {Component} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  standalone: false})
export class TabsComponent {

  heading = 'Tabs';
  subheading = 'Tabs are used to split content between multiple sections. Wide variety available.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  currentJustify = 'start';
  currentOrientation = 'horizontal';
  disabled = true; // For disabled tab examples

  constructor() {
  }
}
