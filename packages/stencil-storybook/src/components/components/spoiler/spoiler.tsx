import { Component, Prop, h, Host, Element, Watch } from '@stencil/core';

@Component({
  tag: 'ap-spoiler',
  styleUrl: 'spoiler.scss',
  shadow: true,
})
export class APSpoiler {

  @Element() el: HTMLElement;

  @Prop() readMoreText: string = "Lire plus";
  @Prop() readLessText: string = "Lire moins";
  @Prop() numberOfLines: string = "3";

  @Prop() expanded: boolean = false;

  private className = "ap-spoiler";
  private buttonEl: HTMLApButtonElement;
  private newNumberOfLines: string;

  @Watch('numberOfLines')
  test(newVal: string) {
    this.newNumberOfLines = newVal;
  }

  componentWillLoad() {
    this.newNumberOfLines = this.numberOfLines;

    if(this.expanded === true) {
      this.newNumberOfLines = this.expanded ? '1000' : this.numberOfLines;
    }
  }

  componentDidLoad() {
    if(this.expanded === true) {
      this.buttonEl.content = this.expanded ? this.readLessText : this.readMoreText;
      this.buttonEl.icon = this.expanded ? 'chevron-up' : 'chevron-down';
    }
  }


  private toggleVisibility(): void {
    this.expanded = !this.expanded;
    this.newNumberOfLines = this.expanded ? '1000' : this.numberOfLines;
    this.buttonEl.content = this.expanded ? this.readLessText : this.readMoreText;
    this.buttonEl.icon = this.expanded ? 'chevron-up' : 'chevron-down';
  }

  render() {
    return <Host class={this.className}>
            <div style={{'-webkit-line-clamp': this.newNumberOfLines}}>
              <slot />
            </div>
            <ap-button content={this.readMoreText} text icon="chevron-down" icon-position="right" onClick={() => this.toggleVisibility()} ref={(el) => this.buttonEl = el as HTMLApButtonElement} />
          </Host>
  }
}
