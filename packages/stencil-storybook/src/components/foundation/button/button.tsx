import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ap-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class APButton {

  @Element() el: HTMLElement;

  @Event() clickedButton: EventEmitter;

  @Prop() type ?= 'button';
  @Prop() content: string;
  @Prop() color ?= 'primary-500';
  @Prop() size ?= 'default';
  @Prop() icon ?: string;
  @Prop() iconPosition ?= 'left';
  @Prop() outlined ?= false;
  @Prop() disabled ?= false;
  @Prop() text ?= false;
  @Prop() iconOnly ?= false;

  componentDidRender() {
    this.disabled ? this.el.setAttribute('disabled', 'true') : this.el.removeAttribute('disabled');
    this.outlined ? this.el.setAttribute('outlined', 'true') : this.el.removeAttribute('outlined');
    this.text ? this.el.setAttribute('text', 'true') : this.el.removeAttribute('text');
    this.iconOnly ? this.el.setAttribute('icon-only', 'true') : this.el.removeAttribute('icon-only');
  }

  render() {
    return <Host
      role="button"
      tabindex={0}
      type={this.type}
      color={this.color}
      size={this.size}
      onClick={e => !this.disabled && this.clickedButton.emit(e)}
      onKeydown={e => (e.key === 'Enter' || e.code === 'Space') && !this.disabled && this.el.click()}
    >
      { this.iconPosition === 'left' && this.icon && this.icon !== '' && !this.iconOnly ? <ap-icon icon={this.icon} size={this.size === 'lg' || this.size === 'default' ? '16' : '12' } color="white" /> : '' }
      { !this.iconOnly && this.content }
      { this.iconOnly && <ap-icon icon={this.icon} size={this.size === 'lg' || this.size === 'default' ? '16' : '12' } color="white" /> }
      { this.iconPosition === 'right' && this.icon && this.icon !== '' && !this.iconOnly ? <ap-icon icon={this.icon} size={this.size === 'lg' || this.size === 'default' ? '16' : '12' } color="white" /> : '' }
    </Host>;
  }
}
