import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class APLink {

  @Element() el: HTMLElement;

  @Prop() content: string;
  @Prop() color?: string = 'primary-500';
  @Prop() size?: string = 'default';
  @Prop() icon?: string;
  @Prop() iconPosition?: string = 'right';

  private className = 'ap-link';

  render() {
    return <Host class={`${this.className}`} color={this.color} size={this.size}>
            {this.icon !== ""  && this.iconPosition === 'left' ? <ap-icon icon={this.icon} /> : '' }
            <div class={`${this.className}__content`}>
              <slot name="link" />
            </div>
            {this.icon !== ""  && this.iconPosition === 'right' ? <ap-icon icon={this.icon} /> : '' }
          </Host>;
  }
}
