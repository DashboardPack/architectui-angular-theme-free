import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-menus',
  templateUrl: './navigation-menus.component.html',
  styles: []
})
export class NavigationMenusComponent implements OnInit {

  heading = 'Navigation Menus';
  subheading = 'Navigation menus are one of the basic building blocks for any web or mobile app.';
  icon = 'pe-7s-photo-gallery icon-gradient bg-mean-fruit';

  constructor() {
  }

  ngOnInit() {
  }

}
