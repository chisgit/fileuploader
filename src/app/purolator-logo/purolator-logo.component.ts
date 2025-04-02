import { Component } from '@angular/core';

@Component({
  selector: 'app-purolator-logo',
  standalone: true,
  imports: [],
  templateUrl: './purolator-logo.component.html',
  styleUrl: './purolator-logo.component.scss'
})
export class PurolatorLogoComponent {
  logoPath = 'assets/logo.png';
}
