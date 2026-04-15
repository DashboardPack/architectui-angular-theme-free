import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeOptions {
  sidebarHover = signal(false);
  toggleSidebar = signal(false);
  toggleSidebarMobile = signal(false);
  toggleHeaderMobile = signal(false);
  toggleFixedFooter = signal(false);
}
