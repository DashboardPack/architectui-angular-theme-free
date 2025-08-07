import {Component} from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  standalone: false})
export class AccordionsComponent {

  heading = 'Accordions';
  subheading = 'Accordions represent collapsable component with extended functionality.';
  icon = 'pe-7s-diamond icon-gradient bg-warm-flame';

  // NgBootstrap collapse state
  public isCollapsed = false;

  // Basic accordion panels (can be opened independently)
  public panel1Open = true;  // Start with first panel open
  public panel2Open = false;

  // Accordion behavior (only one panel open at a time)
  public activePanel: string | null = 'panel3'; // Start with first panel open

  // Toggle panels (independent)
  public toggle1Open = false;
  public toggle2Open = false;

  // Prevention example
  public prevent1Open = false;
  public prevent2Open = false;

  public openAccordionPanel(panelId: string) {
    // Toggle behavior: if clicking the same panel, close it; otherwise open the clicked one
    if (this.activePanel === panelId) {
      this.activePanel = null;
    } else {
      this.activePanel = panelId;
    }
  }

  public handlePreventToggle() {
    // This demonstrates prevention logic - do nothing
  }

  constructor() {
  }
}
