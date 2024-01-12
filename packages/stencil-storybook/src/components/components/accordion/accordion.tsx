import { Component, Prop, h, Host, Element, Listen, State } from '@stencil/core';

@Component({
  tag: 'ap-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class APAccordion {

  @Element() el: HTMLElement;

  @Prop() color: string = 'default';
  @Prop() size: string = 'default';
  @Prop({reflect: true, mutable: true}) expanded ?= false;
  @Prop() expandIcon: string = 'chevron-down';
  @Prop() collapseIcon: string = 'chevron-up';
  @Prop() iconPosition: string = "right";
  @Prop() ariaControls!: string;
  @Prop() triggerText!: string;

  @State() accordionItems: HTMLApAccordionItemElement[] = [];

  private className = "ap-accordion";

  @Listen('expandCollapse')
  expandCollapseHandler(e: CustomEvent) {
    if(e.detail.expanded) {
      this.accordionItems.forEach((item: HTMLApAccordionItemElement) => {
        item.expanded = false;

        if(item === e.detail.element) {
          item.expanded = true;
        }
      })

      this.setAccordionItems(this.accordionItems)
    }
  }

  componentWillLoad() {
    this.accordionItems = this.el.querySelectorAll('ap-accordion-item') as any;
    this.setAccordionItems(this.accordionItems);
  }

  private setAccordionItems(items: HTMLApAccordionItemElement[]): void {
    this.accordionItems = [...items];
  }

  render() {
    return <Host class={this.className} color={this.color} size={this.size}>
            <slot />
            </Host>
  }
}
