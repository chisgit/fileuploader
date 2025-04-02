import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PurolatorLogoComponent } from './purolator-logo/purolator-logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, FileUploadComponent, PurolatorLogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GHG Manual File Portal';
}
