import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Set HomeComponent to load at the root path
  }
];
