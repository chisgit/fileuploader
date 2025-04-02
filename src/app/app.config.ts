import { ApplicationConfig, provideZoneChangeDetection, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { getOktaConfig } from './okta-auth.config';
import { provideAnimations } from '@angular/platform-browser/animations';

// Factory function to create an OktaAuth instance with platform awareness
export function oktaAuthFactory(platformId: Object) {
  // Get the platform-specific configuration
  const config = getOktaConfig(platformId);
  return new OktaAuth(config);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    {
      provide: OKTA_AUTH,
      useFactory: oktaAuthFactory,
      deps: [PLATFORM_ID]
    }
  ]
};
