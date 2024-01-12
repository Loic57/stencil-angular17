import { Component } from '@angular/core';
import { ComponentLibraryModule } from 'component-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentLibraryModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
