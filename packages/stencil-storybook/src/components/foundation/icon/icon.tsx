import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-icon',
  styleUrl: './icon.scss',
  shadow: false,
})
export class APIcon {

  @Element() el: HTMLElement;

  @Prop() icon: string;
  @Prop() size ?= '16';
  @Prop() color ?= 'black';
  @Prop() rounded ?= false;

  componentDidRender() {
    this.rounded ? this.el.setAttribute('rounded', 'true') : this.el.removeAttribute('rounded');
  }

  render() {
    return <Host class={`icon-${this.icon}`} color={this.color} size={this.size} aria-hidden="true"></Host>;
  }
}
