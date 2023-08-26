import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactComponentDirective } from './directives/react-component.directive';



@NgModule({
  declarations: [
    ReactComponentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReactComponentDirective
  ]
})
export class SharedModule { }
