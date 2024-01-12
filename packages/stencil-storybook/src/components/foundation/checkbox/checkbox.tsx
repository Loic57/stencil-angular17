import { Component, Prop, h, Host, Element, EventEmitter, Event, Method } from '@stencil/core';

@Component({
  tag: 'ap-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class APCheckbox {

  @Element() el: HTMLElement;

  @Event() clickedCheckbox: EventEmitter;

  @Prop() color ?= 'primary-500';
  @Prop() size = 'default';

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

  inputEl: HTMLInputElement;

  private className = "ap-checkbox"

  @Method()
  async check(): Promise<void> {
    this.checked = true;
    this.inputEl.checked = true;
  }

  @Method()
  async unCheck(): Promise<void> {
    this.checked = false;
    this.inputEl.checked = false;
  }

  private async handleClick(): Promise<void> {
    if (!this.disabled) {
      (this.checked) ? await this.unCheck() : await this.check();
      this.clickedCheckbox.emit({ checked: this.checked });
    }
  }

  componentDidRender() {
    this.disabled ? this.inputEl.setAttribute('disabled', 'true') : this.inputEl.removeAttribute('disabled');
    this.disabled ? this.el.setAttribute('disabled', 'true') : this.el.removeAttribute('disabled');
    this.indeterminate ? this.inputEl.setAttribute('indeterminate', 'true') : this.inputEl.removeAttribute('indeterminate');
    this.indeterminate ? this.el.setAttribute('indeterminate', 'true') : this.el.removeAttribute('indeterminate');
    this.error ? this.el.setAttribute('error', 'true') : this.el.removeAttribute('error');
    this.checked ? this.inputEl.setAttribute('checked', 'true') : this.inputEl.removeAttribute('checked');
    this.border ? this.el.setAttribute('border', 'true') : this.el.removeAttribute('border');
    this.inputEl.checked = this.checked;
  }

  componentDidUpdate() {
    this.disabled ? this.inputEl.setAttribute('disabled', 'true') : this.inputEl.removeAttribute('disabled');
    this.disabled ? this.el.setAttribute('disabled', 'true') : this.el.removeAttribute('disabled');
    this.indeterminate ? this.inputEl.setAttribute('indeterminate', 'true') : this.inputEl.removeAttribute('indeterminate');
    this.indeterminate ? this.el.setAttribute('indeterminate', 'true') : this.el.removeAttribute('indeterminate');
    this.error ? this.el.setAttribute('error', 'true') : this.el.removeAttribute('error');
    this.checked ? this.el.setAttribute('checked', 'true') : this.el.removeAttribute('checked');
    this.inputEl.checked = this.checked;
  }

  render() {
    return <Host color={this.color} size={this.size} onClick={() => this.handleClick()} onKeydown={(e) => (e.key === "Enter" || e.code === "Space") && this.handleClick()} tabIndex={0}>
            <div class={`${this.className}`}>
              <input type="checkbox" ref={(el) => this.inputEl = el as HTMLInputElement} id={this.inputId} required={this.required} tabIndex={-1} />
              <div class={`${this.className}__checkbox`}>
                {this.checked && <ap-icon icon="check" />}
                {this.indeterminate && !this.checked && <ap-icon icon="minus" />}
              </div>
            </div>
            {
              this.label &&
              <div class={`${this.className}__text`}>
                {this.label && this.label !== "" ? <ap-label innerHTML={this.label} for={this.inputId} required={this.required} assistive-text={this.assistiveText} /> : ''}
                {this.error && this.errorText && this.errorText !== "" ? <ap-error-text content={this.errorText} /> : ''}
              </div>
            }
          </Host>;
  }
}
