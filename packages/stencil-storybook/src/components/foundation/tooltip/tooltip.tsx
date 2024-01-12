import { Component, Prop, h, Host, Element } from '@stencil/core';

import {computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';

@Component({
  tag: 'ap-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class APTooltip {

  @Element() el: HTMLElement;

  @Prop() content: string;
  @Prop() placement = 'right';
  @Prop() color ?= 'default';
  @Prop() size ?= 'default';

  private tooltipTriggerEl!: HTMLElement;
  private tooltipEl!: HTMLElement;
  private arrowTooltipEl!: HTMLElement;

  private className = 'ap-tooltip';

  componentDidRender() {
    this.tooltipTriggerEl.addEventListener('mouseenter', () => this.showTooltip());
    this.tooltipTriggerEl.addEventListener('mouseleave', () => this.hideTooltip());

    this.tooltipTriggerEl.addEventListener('focus', () => this.showTooltip());
    this.tooltipTriggerEl.addEventListener('blur', () => this.hideTooltip())
  }

  private update(): void {
    computePosition(this.tooltipTriggerEl, this.tooltipEl, {
      placement: this.placement as any,
      middleware: [offset(8), flip(), shift({padding: 5}), arrow({element: this.arrowTooltipEl})],
    }).then(({x, y, placement, middlewareData}) => {
      Object.assign(this.tooltipEl.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      // Accessing the data
      const {x: arrowX, y: arrowY} = middlewareData.arrow;

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];

      Object.assign(this.arrowTooltipEl.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
      });
    });
  }

  private showTooltip(): void {
    this.tooltipEl.style.display = 'block';
    this.update();
  }

  private hideTooltip(): void {
    this.tooltipEl.style.display = '';
  }

  render() {
    return <Host size={this.size} color={this.color}>
            <div role="tooltip" id="tooltip" ref={(el) => this.tooltipEl = el as HTMLElement}>
              <slot name="content" />
              <div id="arrow" ref={(el) => this.arrowTooltipEl = el as HTMLElement} />
            </div>
            <div ref={(el) => this.tooltipTriggerEl = el as HTMLElement} class={`${this.className}__slot`}>
              <slot />
            </div>
          </Host>;
  }
}
