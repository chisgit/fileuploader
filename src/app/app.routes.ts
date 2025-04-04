import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { FileUploadComponent } from './file-upload/file-upload.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: OktaCallbackComponent
  },
  {
    path: 'file-upload',
    component: FileUploadComponent,
    canActivate: [OktaAuthGuard]
  }
];
