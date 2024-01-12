import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class APBreadcrumb {

  @Element() el: HTMLElement;

  @Prop() color = 'default';
  @Prop() size = 'default';
  @Prop() current!: string;

  render() {
    return <Host color={this.color} size={this.size} role="navigation" aria-label="Fil d'ariane">
              <ul>
                <slot />
                <li><span aria-current="page">{this.current}</span></li>
              </ul>
            </Host>;
  }
}


