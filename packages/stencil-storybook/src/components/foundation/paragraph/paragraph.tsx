import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-paragraph',
  styleUrl: 'paragraph.scss',
  shadow: true
})
export class APParagraph {

  @Element() el: HTMLElement;

  @Prop() content: string;
  @Prop() color ?= 'blue-700';
  @Prop() size ?= '16';
  @Prop() weight = 300;

  className = 'ap-paragraph';

  render() {

    return (
      <Host color={this.color} size={this.size} weight={this.weight}>
        <p class={this.className}>
          <slot />
        </p>
      </Host>
    );
  }
}
