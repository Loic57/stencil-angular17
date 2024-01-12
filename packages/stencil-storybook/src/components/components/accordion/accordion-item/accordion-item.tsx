import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ap-accordion-item',
  styleUrl: 'accordion-item.scss',
  shadow: true,
})
export class APAccordionItem {

  @Element() el: HTMLElement;

  @Event() expandCollapse: EventEmitter;

  @Prop() color: string = 'default';
  @Prop() size: string = 'default';
  @Prop({reflect: true, mutable: true}) expanded ?= false;
  @Prop() expandIcon: string = 'chevron-down';
  @Prop() collapseIcon: string = 'chevron-up';
  @Prop() iconPosition: string = "right";
  @Prop() ariaControls!: string;
  @Prop() triggerText!: string;
  @Prop() rightText?: string;

  private className = "ap-accordion-item";
  private buttonEl: HTMLButtonElement;
  private iconEl: HTMLApIconElement;
  private expandContent: HTMLDivElement;

  private expand(): void {
    this.iconEl.icon = this.collapseIcon;
    this.buttonEl.setAttribute('aria-expanded', 'true');
    this.expandContent.removeAttribute('hidden');
    this.expandContent.style.height = this.expandContent.scrollHeight + 'px';
  }

  private collapse(): void {
    this.iconEl.icon = this.expandIcon;
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

    this.expandCollapse.emit({element: this.el, expanded: this.expanded})
  }

  componentDidRender() {
    this.expanded ? this.expand() : this.collapse();
  }

  componentDidUpdate() {
    this.expanded ? this.expand() : this.collapse();
  }

  render() {
    return <Host class={this.className} color={this.color} size={this.size}>
              <button
                class={`${this.className}__trigger`}
                onClick={() => this.toggleExpand()}
                ref={(el) => this.buttonEl = el as HTMLButtonElement}
                aria-expanded={false}
                aria-controls={this.ariaControls}
              >
                <div>
                  <ap-icon icon="chevron-down" rounded size="32" color="primary-500" ref={(el) => this.iconEl = el as HTMLApIconElement} />
                  {this.triggerText}
                </div>
                {this.rightText !== "" ? <span>{this.rightText}</span> : ''}
              </button>
              <div class={`${this.className}__content`} hidden id={this.ariaControls} ref={(el) => this.expandContent = el as HTMLDivElement} aria-hidden="true">
                <div class="inner">
                  <slot />
                </div>
              </div>
            </Host>
  }
}
