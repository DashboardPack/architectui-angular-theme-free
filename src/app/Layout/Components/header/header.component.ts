import {Component, HostBinding, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import { ConfigService } from '../../../ThemeOptions/store/config.service';
import { ConfigState } from '../../../ThemeOptions/store/config.state';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {ThemeOptions} from '../../../theme-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,})
export class HeaderComponent {

  faEllipsisV = faEllipsisV;

  public config$: Observable<ConfigState>;

  constructor(
    public globals: ThemeOptions,
    private configService: ConfigService
  ) {
    this.config$ = this.configService.config$;
  }

  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  isActive = false;


  toggleSidebar() {
    this.globals.toggleSidebar.set(!this.globals.toggleSidebar());
    if (this.globals.toggleSidebar()) {
      this.globals.sidebarHover.set(false);
    }
  }

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile.set(!this.globals.toggleSidebarMobile());
  }

  toggleHeaderMobile() {
    this.globals.toggleHeaderMobile.set(!this.globals.toggleHeaderMobile());
  }

}
