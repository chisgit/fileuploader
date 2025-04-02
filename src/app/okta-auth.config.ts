import { isPlatformBrowser } from '@angular/common';
import { OktaAuth } from '@okta/okta-auth-js';

// Create a function to get the appropriate config based on the platform
export function getOktaConfig(platformId: Object) {
  const isBrowser = isPlatformBrowser(platformId);
  
  return {
    clientId: '0oao46ns6vl6nkyxX5d7',
    issuer: 'https://dev-43296795.okta.com/oauth2/default',
    redirectUri: 'http://localhost:4200/callback',
    scopes: ['openid', 'profile', 'email'],
    tokenManager: {
      storage: isBrowser ? 'localStorage' : 'memory'
    }
  };
}

// We'll create the OktaAuth instance in the app.config files instead
// This prevents it from being created during SSR with wrong settings
