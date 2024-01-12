import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-alert',
  styleUrl: 'alert.scss',
  shadow: true
})
export class APAlert {

  @Element() el: HTMLElement;

  @Prop() color ?= 'success';
  @Prop() size ?= 'default';
  @Prop() icon: string;
  @Prop() close ?= false;

  className = 'ap-alert';

  componentDidRender() {
    this.close ? this.el.setAttribute('close', 'true') : this.el.removeAttribute('close');
  }

  render() {
    return (
      <Host color={this.color} size={this.size}>
        {
          this.icon !== undefined
          ?  <div class={`${this.className}__icon`}>
              <ap-icon icon={this.icon} size='24' />
            </div>
          : ''
        }
        <div class={`${this.className}__content`}>
          <slot />
          <slot name="buttons" />
        </div>
        {
          this.close && <ap-button icon="cross" icon-only="true" size="sm" text class={`${this.className}__close`} />
        }
      </Host>
    );
  }
}
