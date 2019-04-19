import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  heading = 'Form Layouts';
  subheading = 'Build whatever layout you need with our ArchitectUI framework.';
  icon = 'pe-7s-graph text-success';

  constructor() {
  }

  ngOnInit() {
  }

}
