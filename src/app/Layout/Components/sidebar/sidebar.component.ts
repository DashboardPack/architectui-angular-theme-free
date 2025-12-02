import {Component, HostListener, OnInit, afterNextRender} from '@angular/core';
import {ThemeOptions} from '../../../theme-options';
import {Observable} from 'rxjs';
import { ConfigService } from '../../../ThemeOptions/store/config.service';
import { ConfigState } from '../../../ThemeOptions/store/config.state';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: false,
  styles: [`
    /* Override the existing styles with important to ensure animation works */
    .vsm-dropdown {
      max-height: 0 !important;
      overflow: hidden !important;
      opacity: 0 !important;
      transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out !important;
      position: relative !important;
    }
    
    .vsm-dropdown-show {
      max-height: 500px !important;
      opacity: 1 !important;
    }
    
    /* Arrow rotation - override existing transform */
    .vsm-item.has-sub .vsm-arrow {
      transition: transform 0.3s ease !important;
      transform: rotate(270deg) !important;  /* Point right */
    }
    
    .vsm-item.has-sub.vsm-open .vsm-arrow {
      transform: rotate(360deg) !important;  /* Point down */
    }
  `]
})
export class SidebarComponent implements OnInit {
  public extraParameter: any;
  public openMenus: string[] = [];
  
  // Supported menu types: dashboardsMenu, pagesMenu, elementsMenu, componentsMenu, 
  // tablesMenu, formsMenu, chartsMenu, widgetsMenu

  public config$: Observable<ConfigState>;

  constructor(
    public globals: ThemeOptions,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {
    this.config$ = this.configService.config$;

    // Use afterNextRender for zoneless compatibility (replaces setTimeout)
    afterNextRender(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });
  }

  private newInnerWidth = 0;
  private innerWidth = 0;
  activeId = 'dashboardsMenu';

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
    // If we're closing the sidebar, also clear the hover state
    if (this.globals.toggleSidebar) {
      this.globals.sidebarHover = false;
    }
  }

  onSidebarMouseEnter() {
    // Only allow hover to open sidebar if it's in collapsed state
    if (this.globals.toggleSidebar) {
      this.globals.sidebarHover = true;
    }
  }

  onSidebarMouseLeave() {
    // Only remove hover state if sidebar is in collapsed state
    if (this.globals.toggleSidebar) {
      this.globals.sidebarHover = false;
    }
  }

  ngOnInit() {
    // Get the extraParameter from the route to determine which menu should be open
    this.extraParameter = this.activatedRoute.snapshot.firstChild?.data['extraParameter'];

    // Initialize open menus based on current route
    if (this.extraParameter) {
      this.openMenus = [this.extraParameter];
    }
  }

  toggleSubmenu(menuId: string) {
    // Toggle submenu: close if open, open if closed (and close all others)
    const index = this.openMenus.indexOf(menuId);
    if (index > -1) {
      this.openMenus.splice(index, 1);
    } else {
      this.openMenus = [menuId]; // Close others and open this one
    }
  }

  onNavigate() {
    // Close sidebar on mobile when navigating
    if (window.innerWidth < 1200) {
      this.globals.toggleSidebarMobile = true;
      this.globals.sidebarHover = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.newInnerWidth = (event.target as Window).innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }
}
