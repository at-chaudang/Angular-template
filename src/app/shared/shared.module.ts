import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnFocusDirective } from './directives/on-focus.directive';

const COMPONENTS = [
];

const DIRECTIVES = [
  OnFocusDirective
];

const MODULES = [
  CommonModule,
];

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...MODULES
  ]
})
export class SharedModule { }
