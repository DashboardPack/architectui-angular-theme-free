import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  standalone: false,})
export class UserBoxComponent implements OnInit {

  constructor(public globals: ThemeOptions) {
  }

  ngOnInit() {
  }

}
