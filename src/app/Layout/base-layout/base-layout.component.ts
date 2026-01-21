import { Component, afterNextRender } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../ThemeOptions/store/config.service';
import { ThemeOptions } from '../../theme-options';
import * as bootstrap from 'bootstrap';
(window as any).bootstrap = bootstrap;

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
  }

  ngAfterContentInit() {
    queueMicrotask(() => {
      this.initializeTooltips();
    });
  }

  initializeTooltips() {
    if (typeof window !== 'undefined' && (window as any).bootstrap) {
      const tooltipTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach(el =>
        new (window as any).bootstrap.Tooltip(el)
      );
    }

    document.body.classList.add('animations-ready');
  }


  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile.set(!this.globals.toggleSidebarMobile());
  }
}



