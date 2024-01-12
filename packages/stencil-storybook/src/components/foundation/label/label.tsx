import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-label',
  styleUrl: 'label.scss',
  shadow: true,
})
export class APLabel {

  @Element() el: HTMLElement;

  @Prop() content: string;
  @Prop() size ?= 'default';
  @Prop() color ?= 'black';
  @Prop() tooltip ?= false;
  @Prop() required ?= false;
  @Prop() for: string;
  @Prop() assistiveText?: string;

  className = 'ap-label';

  componentDidRender() {
    this.tooltip ? this.el.setAttribute('tooltip', 'true') : this.el.removeAttribute('tooltip');
  }

  render() {
    return <Host size={this.size} color={this.color}>
            <div class={`${this.className}`}>
              <label htmlFor={this.for}><slot /> {!this.required ? <span class={`${this.className}__optional`}>(optional)</span> : ''}</label>
              {this.tooltip && (
                <ap-tooltip>
                  <ap-icon icon="circle-info" />
                </ap-tooltip>
              )}
            </div>
            {this.assistiveText !== "" ? <div class={`${this.className}__assistive-text`}>{this.assistiveText}</div> : '' }
          </Host>;
  }
}
