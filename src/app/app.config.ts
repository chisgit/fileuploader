import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://YOUR_OKTA_DOMAIN/oauth2/default',
  clientId: 'YOUR_CLIENT_ID',
  redirectUri: window.location.origin + '/login/callback'
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      OktaAuthModule.forRoot({
        oktaAuth
      })
    )
  ]
};
