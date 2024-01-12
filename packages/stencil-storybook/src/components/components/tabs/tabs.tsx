import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ap-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class APTabs {

  @Element() el: HTMLElement;

  @Prop() color: string = 'primary-500';
  @Prop() size: string = 'default';
  @Prop() type: string = 'filled';

  private className = "ap-tabs";
  private slotsArray = [];

  private panelsNodes = [];
  private tabsNodes = [];

  private panelsEls = [];
  private tabsEls = [];

  private firstTab = null;
  private lastTab = null;

  private slotsEls: NodeList;

  private index: number;


  componentWillRender() {
    this.slotsEls = this.el.querySelectorAll('ap-tab');

    this.slotsEls.forEach((slot: HTMLElement) => {
      this.slotsArray.push([slot.getAttribute('content'), slot.innerHTML, slot.getAttribute('id'), slot.getAttribute('selected'), slot.getAttribute('icon'), slot.getAttribute('disabled')]);
    })
  }

  private renderPanel() {
    return this.slotsArray.map((slot: HTMLElement) => {
      const panel = <div id={`panel-${slot[2]}`} role="tabpanel" tabindex="0" aria-labelledby={slot[2]} innerHTML={slot[1]} />;
      this.panelsNodes.push(panel)

      return panel;
    })
  }

  private renderTab() {
    return this.slotsArray.map((slot: HTMLElement) => {
      const tab = <button
                    id={slot[2]}
                    role="tab"
                    aria-selected={slot[3] && 'true'}
                    aria-controls={`panel-${slot[2]}`}
                    disabled={slot[5]}
                    onClick={e => this.setSelectedTab(e.currentTarget, true)}
                    onKeyDown={(e: KeyboardEvent) => this.onKeydown(e)}
                  >
                    {slot[4] ? <ap-icon icon={slot[4]} size="16" /> : ''}
                    {slot[0]}
                  </button>;

      this.tabsNodes.push(tab)

      return tab;
    })
  }

  private setSelectedTab(currentTab, setFocus: boolean): void {
    if (typeof setFocus !== 'boolean') {
      setFocus = true;
    }

    this.tabsEls.forEach((tab, i) => {
      if (currentTab === tab) {
        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');
        this.panelsEls[i].classList.remove('is-hidden');
        if (setFocus) {
          tab.focus();
        }
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.tabIndex = -1;
        this.panelsEls[i].classList.add('is-hidden');
      }
    })
  }

  private setSelectedToPreviousTab(currentTab) {
    if (currentTab === this.firstTab) {
      this.setSelectedTab(this.lastTab, true);
    }
    else {
      this.index = this.tabsEls.indexOf(currentTab);
      this.setSelectedTab(this.tabsEls[this.index - (currentTab.previousElementSibling.hasAttribute('disabled') ? 2 : 1)], true); // Si disabled on recule de deux
    }
  }

  private setSelectedToNextTab(currentTab) {
    if (currentTab === this.lastTab) {
      this.setSelectedTab(this.firstTab, true);
    }
    else {
      this.index = this.tabsEls.indexOf(currentTab);
      this.setSelectedTab(this.tabsEls[this.index + (currentTab.nextElementSibling.hasAttribute('disabled') ? 2 : 1)], true); // Si disabled on avance de deux
    }
  }

  private onKeydown(event: KeyboardEvent) {
    var tgt = event.currentTarget,
      flag = false;

    switch (event.key) {
      case 'ArrowLeft':
        this.setSelectedToPreviousTab(tgt);
        flag = true;
        break;

      case 'ArrowRight':
        this.setSelectedToNextTab(tgt);
        flag = true;
        break;

      case 'Home':
        this.setSelectedTab(this.firstTab, true);
        flag = true;
        break;

      case 'End':
        this.setSelectedTab(this.lastTab, true);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }


  componentDidLoad() {

    // Transformation des noeuds en elements
    this.tabsNodes.forEach(tab => {
      this.tabsEls.push(this.el.shadowRoot.querySelector(`#${tab['$attrs$']['id']}`))
    });

    this.panelsNodes.forEach(panel => {
      this.panelsEls.push(this.el.shadowRoot.querySelector(`#${panel['$attrs$']['id']}`))
    });

    this.tabsEls.forEach(tab => {
      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');

      if (!this.firstTab) {
        this.firstTab = tab;
      }
      this.lastTab = tab;
    });

    // Lors du chargement du composant la première tab est selected
    this.setSelectedTab(this.firstTab, false);
  }

  render() {
    return <Host class={this.className} color={this.color} size={this.size} type={this.type}>
            <div role="tablist" aria-labelledby="tablist-1">
              { this.renderTab() }
            </div>

            { this.renderPanel() }
          </Host>
  }
}
