import { Component, Prop, h, Host, Element, EventEmitter, Event } from '@stencil/core';


@Component({
  tag: 'ap-radio',
  styleUrl: 'radio.scss',
  shadow: false
})
export class APRadio {

  @Element() el: HTMLElement;

  @Event() clickedRadio: EventEmitter;

  @Prop() color ?= 'primary-500';
  @Prop() size ?= 'default';

  @Prop() label?: string;
  @Prop() assistiveText?: string;
  @Prop() errorText?: string;

  @Prop() inputId: string;
  @Prop() inputName!: string;
  @Prop() value?: string;

  @Prop() disabled ?= false;
  @Prop() border ?= false;
  @Prop() indeterminate ?= false;
  @Prop() required ?= false;
  @Prop() error ?= false;
  @Prop({ mutable: true }) checked ?= false;

  private className = 'ap-radio';
  private inputEl: HTMLInputElement;

  private handleClick(e): void {
    e.preventDefault();

    if (this.inputEl.checked) {
      return;
    }

    if (!this.disabled) {
      this.inputEl.checked = !this.inputEl.checked;
      this.checked = this.inputEl.checked;

      this.clickedRadio.emit({
        name: this.inputName,
        value: this.value,
        checked: this.checked,
      });
    }
    e.stopPropagation();
  }

  componentDidRender() {
    this.disabled ? this.inputEl.setAttribute('disabled', 'true') : this.inputEl.removeAttribute('disabled');
    this.error ? this.el.setAttribute('error', 'true') : this.el.removeAttribute('error');
    this.checked ? this.inputEl.setAttribute('checked', 'true') : this.inputEl.removeAttribute('checked');
    this.border ? this.el.setAttribute('border', 'true') : this.el.removeAttribute('border');
    this.inputEl.checked = this.checked;
  }

  componentDidUpdate() {
    this.disabled ? this.inputEl.setAttribute('disabled', 'true') : this.inputEl.removeAttribute('disabled');
    this.error ? this.el.setAttribute('error', 'true') : this.el.removeAttribute('error');
    this.inputEl.checked = this.checked;
  }

  render() {
    return (
      <Host class={`${this.className}`} color={this.color} size={this.size} onClick={(e) => this.handleClick(e)} onKeydown={(e) => (e.code === 'Enter' || e.code === 'Space') && this.handleClick(e)}tabIndex={0}>
        <div class={`${this.className}`}>
          <input
            type="radio"
            ref={(el) => this.inputEl = el as HTMLInputElement}
            id={this.inputId}
            required={this.required}
            name={this.inputName}
            value={this.value}
            tabIndex={-1}
          />
          <div class={`${this.className}__radio`}></div>
        </div>
        <div class={`${this.className}__text`}>
          {this.label && this.label !== "" ? <ap-label innerHTML={this.label} for={this.inputId} required={this.required} assistive-text={this.assistiveText}></ap-label>: ''}
          {this.error && this.errorText && this.errorText !== "" ? <ap-error-text content={this.errorText}></ap-error-text> : ''}
        </div>
      </Host>
    );
  }
}
