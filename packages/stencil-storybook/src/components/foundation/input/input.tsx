import { Component, Prop, h, Host, Element, EventEmitter, Event, Listen } from '@stencil/core';

@Component({
  tag: 'ap-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class APInput {

  @Element() el: HTMLElement;

  @Event() inputTyping: EventEmitter;
  @Event() inputFilled: EventEmitter;

  @Prop() color ?= 'neutral-50';
  @Prop() size ?= 'default';
  @Prop() label: string;
  @Prop() assistiveText?: string;
  @Prop() errorText?: string;
  @Prop() inputId: string;
  @Prop() value: string;
  @Prop() name: string;
  @Prop() placeholder?: string;
  @Prop() leadingIcon?: string;
  @Prop() trailingIcon?: string;
  @Prop() type = 'text';

  @Prop() required = false;
  @Prop() disabled = false;
  @Prop() error = false;

  private className = 'ap-input';

  @Listen('input')
  onInputHander(ev) {
    const fieldValue = ev.target.shadowRoot.querySelector('input').value;
    this.value = fieldValue;
    this.inputTyping.emit(this.value);
  }

  componentDidRender() {
    this.disabled ? this.el.setAttribute('disabled', 'true') : this.el.removeAttribute('disabled');
    this.error ? this.el.setAttribute('error', 'true') : this.el.removeAttribute('error');
  }

  // S'utilise lorsque ap-input se trouve dans ap-dropdown
  componentWillUpdate() {
    this.inputTyping.emit(this.value);
  }

  render() {
    return <Host color={this.color} size={this.size}>
            {this.label && this.label !== "" ? <ap-label innerHTML={this.label} for={this.inputId} required={this.required} assistive-text={this.assistiveText}></ap-label>: ''}
            <div class={`${this.className}__input-container`}>
              {(this.leadingIcon && this.leadingIcon !== "") && <ap-icon icon={this.leadingIcon} />}
              <input
                type={this.type}
                class={`${this.className}__input`}
                id={this.inputId}
                name={this.name}
                placeholder={this.placeholder}
                value={this.value}
                disabled={this.disabled}
                required={this.required}
              />
              {(this.trailingIcon && this.trailingIcon !== "") && <ap-icon icon={this.trailingIcon} />}
            </div>
            { this.error && this.errorText !== "" ? <ap-error-text content={this.errorText} /> : '' }
          </Host>;
  }
}
