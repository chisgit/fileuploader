import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purolator-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logo-container">
      <img src="assets/logo.png" alt="Purolator Logo" class="purolator-logo">
    </div>
  `,
  styles: [`
    .logo-container {
      padding: 5px;
      display: flex;
      align-items: center;
      height: 100%;
    }
    .purolator-logo {
      max-height: 40px;
      margin-right: 10px;
    }
  `]
})
export class PurolatorLogoComponent {}
