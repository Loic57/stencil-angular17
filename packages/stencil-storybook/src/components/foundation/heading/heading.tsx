import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-heading',
  styleUrl: 'heading.scss',
  shadow: true
})
export class APHeading {

  @Element() el: HTMLElement;

  @Prop() content: string;
  @Prop() color ?= 'black';
  @Prop() size ?= 'h1';
  @Prop() weight = 500;

  className = 'ap-heading';

  render() {
    const CustomTag = this.size;

    return (
      <Host color={this.color} size={this.size} weight={this.weight}>
        <CustomTag class={this.className}>
          <slot />
        </CustomTag>
      </Host>
    );
  }
}
