import { Component, Prop, h, Host, Element, EventEmitter, Event } from '@stencil/core';


@Component({
  tag: 'ap-split-button',
  styleUrl: 'split-button.scss',
  shadow: true
})
export class APSplitButton {

  @Element() el: HTMLElement;

  @Event() clickedAction: EventEmitter;

  @Prop() color ?= 'primary-500';
  @Prop() size ?= 'default';
  @Prop() content: string;
  @Prop() icon?: string;

  private className = 'ap-split-button';

  render() {
    return (
      <Host class={this.className} border="default" size={this.size}>
        <ap-button content={this.content} color={this.color} size={this.size} icon={this.icon} />
        <ap-button icon-only icon="chevron-down" color={this.color} size={this.size} onClick={e => this.clickedAction.emit(e)} onKeyUp={e => e.code === 'Enter' && this.clickedAction.emit(e)} />
      </Host>
    );
  }
}
