import {Component, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs';
import { ConfigService } from '../../ThemeOptions/store/config.service';
import {ThemeOptions} from '../../theme-options';
import {animate, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  standalone: false,
  // Temporarily disable animations to fix jumping issue
  animations: []
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
    
    // Initialize Bootstrap components after view is stable
    setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).bootstrap) {
        // Initialize any Bootstrap tooltips, popovers, etc. that might cause layout shifts
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
        });
      }
      
      // Re-enable animations after layout is stable
      document.body.classList.add('animations-ready');
    }, 100);
  }

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }
}



