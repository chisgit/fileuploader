import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Enable production mode for better performance
enableProdMode();

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
