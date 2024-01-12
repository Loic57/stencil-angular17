import { Component, Prop, h, Host, Element, EventEmitter, Event, /* Method */ } from '@stencil/core';


@Component({
  tag: 'ap-switch',
  styleUrl: 'switch.scss',
  shadow: true
})
export class APSwitch {

  @Element() el: HTMLElement;

  @Event() clickedRadio: EventEmitter;

  @Prop() color ?= 'neutral-50';
  @Prop() size ?= 'default';

  @Prop() label?: string;
  @Prop() assistiveText?: string;
  @Prop() errorText?: string;

  @Prop() inputId: string;

  @Prop() disabled ?= false;
  @Prop() border ?= false;
  @Prop() indeterminate ?= false;
  @Prop() required ?= false;
  @Prop() error ?= false;
  @Prop({ mutable: true }) checked ?= false;
  @Prop() leadingIcon?: string;
  @Prop() trailingIcon?: string;

  private className = 'ap-switch';

  componentDidRender() {
    this.disabled ? this.el.setAttribute('disabled', 'true') : this.el.removeAttribute('disabled');
    this.checked ? this.el.setAttribute('checked', 'true') : this.el.removeAttribute('checked');
  }

  componentDidUpdate() {
    this.disabled ? this.el.setAttribute('disabled', 'true') : this.el.removeAttribute('disabled');
    this.checked ? this.el.setAttribute('checked', 'true') : this.el.removeAttribute('checked');
  }

  render() {
    return (
      <Host color={this.color} size={this.size} >
        {
          this.label && this.label !== "" ? <ap-label innerHTML={this.label} for={this.inputId} required={this.required} assistive-text={this.assistiveText}></ap-label>: ''
        }
        <div class={`${this.className}__container`}>
          <ap-checkbox id={this.inputId} required={this.required} checked={this.checked} disabled={this.disabled} input-id={this.inputId} />
          {
            this.leadingIcon || this.trailingIcon
            ? <div class={`${this.className}__icons`}>
                { this.leadingIcon && <div class={`${this.className}__left-icon`}><ap-icon icon={this.leadingIcon} size="16" /></div> }
                { this.trailingIcon && <div class={`${this.className}__right-icon`}><ap-icon icon={this.trailingIcon} size="16" /></div> }
              </div>
            : ''
          }
          <div class={`${this.className}__thumb`}></div>
        </div>
        {this.error && this.errorText && this.errorText !== "" ? <ap-error-text content={this.errorText}></ap-error-text> : ''}
      </Host>
    );
  }
}
