import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-expand',
  styleUrl: 'expand.scss',
  shadow: true,
})
export class APExpand {

  @Element() el: HTMLElement;

  @Prop() color: string = 'default';
  @Prop() size: string = 'default';
  @Prop({reflect: true, mutable: true}) expanded ?= false;
  @Prop() expandIcon: string = 'chevron-down';
  @Prop() collapseIcon: string = 'chevron-up';
  @Prop() iconPosition: string = "right";
  @Prop() ariaControls!: string;
  @Prop() triggerText!: string;

  private buttonEl: HTMLApButtonElement;
  private expandContent: HTMLDivElement;

  private className = "ap-expand";

  private expand(): void {
    this.buttonEl.icon = this.collapseIcon;
    this.buttonEl.setAttribute('aria-expanded', 'true');
    this.expandContent.removeAttribute('hidden');
    this.expandContent.style.height = this.expandContent.scrollHeight + 'px';
  }

  private collapse(): void {
    this.buttonEl.icon = this.expandIcon;
    this.buttonEl.setAttribute('aria-expanded', 'false');

    // Permet de conserver la transition de 300ms avant que la propriété hidden soit placé sur le contenu (hidden ne permet pas de faire de transitions)
    setTimeout(() => {
      this.expandContent.setAttribute('hidden', 'true');
    }, 300)

    requestAnimationFrame(() => {
      this.expandContent.style.height = '0px';
    })
  }

  private toggleExpand(): void {
    this.expanded = !this.expanded;
    this.expanded ? this.expand() : this.collapse();
  }

  private setIconPosition(): HTMLElement {
    return <ap-button
              icon-only
              icon={this.expandIcon}
              onClick={() => this.toggleExpand()}
              ref={(el) => this.buttonEl = el as HTMLApButtonElement}
              aria-expanded={false}
              aria-controls={this.ariaControls}
            />
  }

  componentDidRender() {
    this.expanded ? this.expand() : this.collapse();
  }

  componentDidUpdate() {
    this.expanded ? this.expand() : this.collapse();
  }

  render() {
    return <Host class={this.className} color={this.color} size={this.size}>
              <div class={`${this.className}__trigger ${(this.iconPosition === "left" || this.iconPosition === "narrow") && 'ap-expand__trigger--narrow'}`}>
                { (this.iconPosition === "left") && this.setIconPosition() }
                <ap-paragraph weight={500}>{this.triggerText}</ap-paragraph>
                { (this.iconPosition === "right" || this.iconPosition === "narrow") && this.setIconPosition() }
              </div>
              <div class={`${this.className}__content`} hidden id={this.ariaControls} ref={(el) => this.expandContent = el as HTMLDivElement} aria-hidden="true">
                <div class="inner">
                  <slot />
                </div>
              </div>
            </Host>
  }
}
