import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './config.state';
import * as ConfigActions from './config.actions.ngrx';

// Re-export ConfigActions for backward compatibility
export { ConfigActions };

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private store: Store<AppState>) { }

  getConfig() {
    this.store.dispatch(ConfigActions.getConfig());
  }

  updateConfig(config: { headerTheme?: string; sidebarTheme?: string }): void {
    this.store.dispatch(ConfigActions.updateConfig({ config }));
  }
}
