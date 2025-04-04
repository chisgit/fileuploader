import { OktaAuth } from '@okta/okta-auth-js';

// Create a configuration function without platform-specific logic
export function getOktaConfig() {
  return {
    clientId: '0oao46ns6vl6nkyxX5d7',
    issuer: 'https://dev-43296795.okta.com/oauth2/default',
    redirectUri: 'http://localhost:4200/callback',
    scopes: ['openid', 'profile', 'email'],
    tokenManager: {
      storage: 'localStorage'
    }
  };
}
