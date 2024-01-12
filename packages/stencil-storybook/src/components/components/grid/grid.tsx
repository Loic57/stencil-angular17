import { Component, h, Host, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ap-grid',
  styleUrl: 'grid.scss',
  shadow: false,
})
export class APGrid {

  @Element() el: HTMLElement;

  @Prop() rowGap?: string;

  private className = "ap-grid";

  render() {
    return <Host class={this.className} rowGap={this.rowGap}>
            <slot />
          </Host>;
  }
}
