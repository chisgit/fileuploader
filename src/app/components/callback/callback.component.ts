import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';
import { getOktaConfig } from '../../okta-auth.config';

@Component({
  selector: 'app-callback',
  template: '<div>Logging in...</div>',
})
export class CallbackComponent implements OnInit {
  private oktaAuth: OktaAuth;

  constructor(private router: Router) {
    this.oktaAuth = new OktaAuth(getOktaConfig());
  }

  async ngOnInit() {
    try {
      // Parse the tokens from the callback URL
      await this.oktaAuth.handleRedirectPromise();
      
      // Get the current authentication state
      const isAuthenticated = await this.oktaAuth.isAuthenticated();
      
      if (isAuthenticated) {
        // Redirect to home or dashboard after successful authentication
        this.router.navigate(['/']);
      } else {
        // Redirect to login if authentication failed
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error handling authentication redirect:', error);
      this.router.navigate(['/login']);
    }
  }
}
