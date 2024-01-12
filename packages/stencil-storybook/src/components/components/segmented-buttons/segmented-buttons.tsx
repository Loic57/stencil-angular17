import { Component, Prop, h, Host, Element, Listen } from '@stencil/core';

@Component({
  tag: 'ap-segmented-buttons',
  styleUrl: 'segmented-buttons.scss',
  shadow: true,
})
export class APSegmentedButtons {

  @Element() el: HTMLElement;

  @Prop() content: string;
  @Prop() color: string;
  @Prop() size ?= 'default';
  @Prop() icon: string;

  @Listen('clickedButton')
  todoCompletedHandler(event: CustomEvent) {
    const clickedButton: any = event.target;

    this.el.querySelectorAll('ap-button').forEach((button: HTMLApButtonElement) => {
      button.outlined = true;
      button.icon = "";
    })

    clickedButton.outlined = false;
    clickedButton.icon = "check";
  }

  render() {
    return <Host color={this.color} size={this.size}>
      <slot />
    </Host>;
  }
}
