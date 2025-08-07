import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, ConfigState } from './config.state';
import * as ConfigActions from './config.actions.ngrx';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config$: Observable<ConfigState>;

  constructor(private store: Store<AppState>) {
    this.config$ = this.store.select('config');
  }

  getConfig() {
    this.store.dispatch(ConfigActions.getConfig());
  }

  updateConfig(config: { headerTheme?: string; sidebarTheme?: string }) {
    this.store.dispatch(ConfigActions.updateConfig({ config }));
  }
}