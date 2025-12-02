import {Component, afterNextRender} from '@angular/core';
import {Observable} from 'rxjs';
import { ConfigService } from '../../ThemeOptions/store/config.service';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  standalone: false,
  // Temporarily disable animations to fix jumping issue
  animations: []
})
export class BaseLayoutComponent {

  public config$: Observable<any>;

  constructor(
    public globals: ThemeOptions,
    private configService: ConfigService
  ) {
    this.config$ = this.configService.config$;

    // Use afterNextRender for zoneless compatibility (replaces setTimeout + detectChanges)
    afterNextRender(() => {
      if (typeof window !== 'undefined' && (window as any).bootstrap) {
        // Initialize any Bootstrap tooltips, popovers, etc. that might cause layout shifts
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
        });
      }

      // Re-enable animations after layout is stable
      document.body.classList.add('animations-ready');
    });
  }

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }
}



