import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Bootstrap once to get an injector, then register the AppComponent as a custom element.
bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    try {
      const el = createCustomElement(AppComponent, { injector: appRef.injector });
      if (!customElements.get('bankline-pf-investimentos-catalogo')) {
        customElements.define('bankline-pf-investimentos-catalogo', el);
      }
    } catch (e) {
      console.error('Failed to define custom element', e);
    }
  })
  .catch((err) => console.error(err));
