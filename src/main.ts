import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Angular 21 is zoneless by default - no provideZoneChangeDetection() needed
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
