import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  standalone: false,})
export class SearchBoxComponent implements OnInit {

  public isActive: any;

  constructor() { }

  ngOnInit() {
  }

}
