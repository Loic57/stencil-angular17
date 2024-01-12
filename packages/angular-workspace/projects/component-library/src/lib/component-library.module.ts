import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './ap-web-components';
import { defineCustomElements } from 'ap-web-components/loader';

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class ComponentLibraryModule {}
