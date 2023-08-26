import { Directive, ElementRef, Input, inject, OnChanges, OnDestroy } from '@angular/core';
import { ComponentProps, ElementType, createElement } from 'react';
import { createRoot } from "react-dom/client";

@Directive({
  selector: '[reactComponent]'
})
export class ReactComponentDirective<Comp extends ElementType > implements OnChanges, OnDestroy {
  @Input({required: true}) reactComponent!: Comp;
  @Input() props!: ComponentProps<Comp>;

  private root = createRoot(inject(ElementRef).nativeElement)

  ngOnChanges(){
    this.root.render(createElement(this.reactComponent, this.props));
  }

  ngOnDestroy(): void {
    this.root.unmount();
  }

}
