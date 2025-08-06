import {Component, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs';
import { ConfigService } from '../../ThemeOptions/store/config.service';
import {ThemeOptions} from '../../theme-options';
import {animate, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  standalone: false,
  animations: [

    trigger('architectUIAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            opacity: 0,
            display: 'flex',
            flex: '1',
            transform: 'translateY(-20px)',
            flexDirection: 'column'

          }),
        ], { optional: true }),
        query(':enter', [
          animate('200ms ease', style({opacity: 1, transform: 'translateY(0)'})),
        ], { optional: true }),

        query(':leave', [
          animate('200ms ease', style({opacity: 0, transform: 'translateY(-20px)'})),
         ], { optional: true })
      ]),
    ])
  ]
})

export class BaseLayoutComponent implements AfterViewInit {

  public config$: Observable<any>;

  constructor(
    public globals: ThemeOptions,
    private configService: ConfigService,
    private cdr: ChangeDetectorRef
  ) {
    this.config$ = this.configService.config$;
  }

  ngAfterViewInit() {
    // Fix ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }
}



