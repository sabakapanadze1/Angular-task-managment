import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import 'zone.js';


bootstrapApplication(AppComponent).catch((err) => {
  console.error('Error bootstrapping application:', err);
});

