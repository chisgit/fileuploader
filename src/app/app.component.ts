import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PurolatorLogoComponent } from './shared/purolator-logo/purolator-logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    FileUploadComponent,
    PurolatorLogoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Purolator GHG Portal';
}
