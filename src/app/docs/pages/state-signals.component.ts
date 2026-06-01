import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-state',
  templateUrl: './state-signals.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateSignalsComponent {
  protected readonly storeSetup = `// app.module.ts
StoreModule.forRoot({ config: configReducer }),
StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),`;

  protected readonly service = `@Injectable({ providedIn: 'root' })
export class ConfigService {
  config$: Observable<ConfigState>;

  constructor(private store: Store<AppState>) {
    this.config$ = this.store.select('config');
  }

  updateConfig(config: { headerTheme?: string; sidebarTheme?: string }) {
    this.store.dispatch(ConfigActions.updateConfig({ config }));
  }
}`;

  protected readonly signalsUsage = `// theme-options.ts — UI flags as signals (no zone.js)
toggleSidebar = signal(false);

// read
if (this.globals.toggleSidebar()) { /* … */ }

// write
this.globals.toggleSidebar.set(true);`;
}
