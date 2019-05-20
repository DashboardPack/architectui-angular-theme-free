import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeOptions {
  sidebarHover = false;
  toggleSidebar = false;
  toggleSidebarMobile = false;
  toggleHeaderMobile = false;
  toggleFixedFooter = false;
}
