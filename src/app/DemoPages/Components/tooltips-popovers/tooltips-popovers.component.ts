import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tooltips-popovers',
  templateUrl: './tooltips-popovers.component.html',
})
export class TooltipsPopoversComponent implements OnInit {

  heading = 'Tooltips & Popovers';
  subheading = 'These Vue components are used to add interaction or extra information for your app\'s content.';
  icon = 'pe-7s-note2 icon-gradient bg-happy-fisher';

  constructor() {
  }

  ngOnInit() {
  }

}
