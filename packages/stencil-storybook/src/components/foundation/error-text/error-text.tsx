import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-error-text',
  styleUrl: 'error-text.scss',
  shadow: true,
})
export class APErrorText {

  @Element() el: HTMLElement;

  @Prop() content: string;
  @Prop() size ?= 'default';
  @Prop() color ?= 'default';

  render() {
    return <Host size={this.size} color={this.color}>
      <ap-icon icon='circle-cross' size="16" />
      {this.content}
    </Host>;
  }
}
