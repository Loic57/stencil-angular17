import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ap-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class APBadge {

  @Element() el: HTMLElement;

  @Event() clickedBadge: EventEmitter;

  @Prop() content: string;
  @Prop() color ?= 'primary-300';
  @Prop() size ?= 'default';
  @Prop() icon ?: string;
  @Prop() iconPosition ?= 'left';
  @Prop() outlined ?= false;
  @Prop() text ?= false;
  @Prop() iconOnly ?= false;

  componentDidRender() {
    this.outlined ? this.el.setAttribute('outlined', 'true') : this.el.removeAttribute('outlined');
    this.text ? this.el.setAttribute('text', 'true') : this.el.removeAttribute('text');
    this.iconOnly ? this.el.setAttribute('icon-only', 'true') : this.el.removeAttribute('icon-only');
  }

  render() {
    return <Host
      color={this.color}
      size={this.size}
      onClick={e => this.clickedBadge.emit(e)}
    >
      { this.iconPosition === 'left' && this.icon && this.icon !== '' ? <ap-icon icon={this.icon} size={'16'} /> : '' }
      { !this.iconOnly && this.content }
      { this.iconPosition === 'right' && this.icon && this.icon !== '' ? <ap-icon icon={this.icon} size={'16'} /> : '' }
    </Host>;
  }
}
