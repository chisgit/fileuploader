import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { getOktaConfig } from './okta-auth.config';
import { OktaAuth } from '@okta/okta-auth-js';
import { PLATFORM_ID } from '@angular/core';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    {
      provide: OktaAuth,
      useFactory: (platformId: Object) => new OktaAuth(getOktaConfig(platformId)),
      deps: [PLATFORM_ID]
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
