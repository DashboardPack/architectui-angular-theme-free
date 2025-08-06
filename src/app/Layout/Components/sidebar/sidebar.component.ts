import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../theme-options';
import {Observable} from 'rxjs';
import { ConfigService } from '../../../ThemeOptions/store/config.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: false,})
export class SidebarComponent implements OnInit {
  public extraParameter: any;
  public openMenus: string[] = [];
  
  // Supported menu types: dashboardsMenu, pagesMenu, elementsMenu, componentsMenu, 
  // tablesMenu, formsMenu, chartsMenu, widgetsMenu

  public config$: Observable<any>;

  constructor(
    public globals: ThemeOptions, 
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {
    this.config$ = this.configService.config$;
  }

  private newInnerWidth: number;
  private innerWidth: number;
  activeId = 'dashboardsMenu';

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  ngOnInit() {
    setTimeout(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });

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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }
}
