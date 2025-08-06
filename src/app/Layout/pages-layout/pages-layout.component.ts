import {Component, OnInit} from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  standalone: false,
  // Disable animations to fix jumping issue and console errors
  animations: []
})
export class PagesLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
