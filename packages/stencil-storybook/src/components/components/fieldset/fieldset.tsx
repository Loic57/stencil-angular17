import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-fieldset',
  styleUrl: 'fieldset.scss',
  shadow: true,
})
export class APFieldset {

  @Element() el: HTMLElement;

  @Prop() color ?= 'primary-500';
  @Prop() size = 'default';

  @Prop() label: string;
  @Prop() required = false;

  private className = "ap-fieldset";

  render() {
    return <Host class={this.className} size={this.size}>
              <fieldset>
                <legend><ap-label required={this.required}>{this.label}</ap-label></legend>
                <slot />
              </fieldset>
          </Host>;
  }
}
