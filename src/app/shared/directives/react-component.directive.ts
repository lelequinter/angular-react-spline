import { Directive, Input } from '@angular/core';
import { ElementType } from 'react';

@Directive({
  selector: '[reactComponent]'
})
export class ReactComponentDirective<Comp extends ElementType > {
  // @Input({required: true}) reactComponent: Comp;

  constructor() { }

}
