import { Component, h, Host, Element, Prop, Event, EventEmitter, State, Listen } from '@stencil/core';

export interface HtmlElementEvent {
  currentTarget: HTMLElement;
}

export type HtmlElementMouseEvent = MouseEvent & HtmlElementEvent;
export type HtmlElementKeyboardEvent = KeyboardEvent & HtmlElementEvent;

export interface dropdownItems {
  content: string,
  value: string,
  id: string,
  disabled?: boolean,
  selected?: boolean,
  icon?: string,
  li: HTMLElement,
  hidden: boolean,
  focused: boolean
}

@Component({
  tag: 'ap-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class APDropdown {

  @Element() el: HTMLElement;

  @Event() clickDropdownItem: EventEmitter;

  @Prop() color? = 'white';
  @Prop() size? = 'default';
  @Prop() data: dropdownItems[] = [];
  @Prop() placeholder: string;

  @State() dropdownVisibilityState = false;
  @State() dropdownItems: dropdownItems[] = [];

  private className = 'ap-dropdown';

  private inputEL: any;
  private dataContainerEl: HTMLElement;
  private currentIndex: number = -1;
  private newIndex: number = null;

  @Listen('clickedAction')
  openDropdownSplitButton() {
    this.openDropdown()
  }

  componentWillLoad() {
    // catch the random reactProp key
    const reactProps = Object.keys(this.el).filter(item => item.indexOf('__reactProps') >= 0);

    // Si reactProps !== undefined alors ça veut dire que la data provient de storybook
    if(this.el[reactProps[0]] !== undefined) {
      this.data = this.el[reactProps[0]].data;
    }

    this.setDropdownItems(this.data);
  }

  componentDidRender() {
    const slotSelectorElement = this.el.querySelector('[slot=selector]');
    if (slotSelectorElement) this.inputEL = this.el.querySelector('ap-input');

    // Fermer le dropdown au clic en dehors du composant
    document.addEventListener('click', (event) => {
      if(!event.composedPath().includes(this.el)) {
        this.closeDropdown()
      }
    });

    // Fermer le dropdown au focus en dehors du composant
    document.addEventListener('focusout', (event) => {
      if(event.composedPath().includes(this.dataContainerEl)) {
        this.closeDropdown()
      }
    });
  }

  componentDidLoad() {
    this.dropdownItems.forEach((item: dropdownItems) => {
      if(item.selected) this.setInputValue(item);
    });

    this.inputEL?.shadowRoot.querySelector('input').addEventListener('keyup', (e: KeyboardEvent) =>  this.filterOptions(e));
  }


  // Gestion de la navigation clavier
  private keyboardNavigationHandler(e: HtmlElementKeyboardEvent): void {
    const liEls = this.el.shadowRoot.querySelectorAll('li');
    const liElsArray = [];

    liEls.forEach(li => liElsArray.push(li))
    const liElsFiltered = liElsArray.filter((li) => !li.classList.contains('ap-dropdown__item--search'));

    switch (e.code) {
      case "ArrowDown": {
        this.newIndex = (this.currentIndex + 1) % liElsFiltered.length;

        if(this.isDisabled(this.dropdownItems[this.newIndex])) {
          this.newIndex = (this.currentIndex + 2) % liElsFiltered.length;
        }

        this.updateIndex(this.newIndex);
        break;
      }
      case "ArrowUp": {
        this.newIndex = (this.currentIndex - 1 + liElsFiltered.length) % liElsFiltered.length;

        if(this.isDisabled(this.dropdownItems[this.newIndex])) {
          this.newIndex = (this.currentIndex - 2 + liElsFiltered.length) % liElsFiltered.length;
        }

        this.updateIndex(this.newIndex);
        break;
      }
      case "Enter": this.clickDropdownItemHandler(this.dropdownItems[this.currentIndex]);break;
      default:
    }
  }

  // Update de l'index courant lorsque l'on navigue avec les flêches haut/bas
  private updateIndex(newIndex: number): void {
    const prevIndex = this.currentIndex;
    this.currentIndex = newIndex;

    this.dataContainerEl.setAttribute("aria-activedescendant", `${this.currentIndex}`);

    if(this.dropdownItems[prevIndex]) this.dropdownItems[prevIndex].focused = false;
    this.dropdownItems[this.currentIndex].focused = true;

    this.setDropdownItems(this.dropdownItems);
  }

  // Construction d'un <li>
  private buildLiItem(item: dropdownItems, index: number): any {
    return (
      <li
        role="option"
        tabIndex={-1}
        id={item.id}
        data-index={index}
        onClick={() => this.clickDropdownItemHandler(item)}
        class={{
          'ap-dropdown__item': true,
          'ap-dropdown__item--disabled': item.disabled,
          'ap-dropdown__item--selected': item.selected,
          'ap-dropdown__item--hidden': item.hidden,
          'ap-dropdown__item--focused': item.focused
        }}
      >
        {item.icon && <ap-icon icon={item.icon} />}
        {item.content}
      </li>
    )
  }

  // Set la value de l'item cliqué dans l'input
  private setInputValue(item: dropdownItems): void {
    this.inputEL.value = item.value;
  }

  // Construction d'un tableau d'items
  private setDropdownItems(dropdown: dropdownItems[]): void {
    this.dropdownItems = [];

    dropdown.forEach((item, index) => {
      item.li = this.buildLiItem(item, index);
      this.dropdownItems.push(item);
    });
  }

  // Gestion du clic sur un item
  private clickDropdownItemHandler(item: dropdownItems): void {

    if(item.disabled) return;

    this.dropdownItems.forEach(item => item.selected = false);
    item.selected = true;

    this.setDropdownItems(this.dropdownItems);
    this.inputEL && this.setInputValue(item);
    this.closeDropdown();

    this.clickDropdownItem.emit(item);
  }

  // Check si l'item selectionné est disabled
  private isDisabled(item: dropdownItems): boolean {
    return item.disabled;
  }

  // Fermeture du dropdown
  private closeDropdown(): void {
    this.dropdownVisibilityState = false;
    this.el.setAttribute('aria-expanded', 'false');
    this.dropdownItems.forEach((item: dropdownItems) => {
      item.hidden = false;
      item.focused = false
    });
    this.setDropdownItems(this.dropdownItems)

    if(this.inputEL) this.inputEL.trailingIcon = 'chevron-down';
  }

  // Ouverture du dropdown
  private openDropdown(): void {
    this.dropdownVisibilityState = true;
    this.el.setAttribute('aria-expanded', 'true');
    if(this.inputEL)  this.inputEL.trailingIcon = 'chevron-up';
  }

  private contains(item: dropdownItems, search: string): boolean {
    return item.content.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
  }

  // Filtrer les options
  private filterOptions(e: KeyboardEvent): void {
    if(e.code !== 'Tab' || !(e.altKey && e.code === 'Tab')) {
      // On cache tous les items
      this.dropdownItems.forEach((item: dropdownItems) => {
        item.hidden = true;
      });

      const search = this.inputEL.value;

      // On garde les items qui contiennent le texte recherché et on les affiche
      this.dropdownItems
        .filter((item: dropdownItems) => this.contains(item, search))
        .forEach((item: dropdownItems) => {
          item.hidden = false;
        });

      // On actualise le tableau d'items
      this.setDropdownItems(this.dropdownItems);
    }
  }

  render() {
    return <Host color={this.color} size={this.size}>
      <div
        class={`${this.className}__trigger`}
        onClick={() => !this.el.querySelector('ap-split-button') && this.openDropdown()}
        onKeyUp={(e) => !this.el.querySelector('ap-split-button') && e.code === 'Tab' && this.openDropdown()}
      >
        <slot name="selector" />
      </div>
      <ul
        role="listbox"
        id="listBoxValues"
        ref={(el) => this.dataContainerEl = el as HTMLElement}
        onKeyUp={(e: HtmlElementKeyboardEvent) => this.keyboardNavigationHandler(e)}
        tabIndex={0}
        class={{
          'ap-dropdown__content': true,
          'ap-dropdown__content--visible': this.dropdownVisibilityState
        }}
      >
        {
          this.dropdownItems.map(item => item.li)
        }
      </ul>
    </Host>;
  }
}




/* import { Component, h, Host, Element, Prop, Event, EventEmitter, State, Fragment } from '@stencil/core';
//import { APInput } from '../../foundation/input/input';
import { isNil } from '../../../utils/lang.utils';

export interface HtmlElementEvent {
  currentTarget: HTMLElement;
}

export type HtmlElementMouseEvent = MouseEvent & HtmlElementEvent;
export type HtmlElementKeyboardEvent = KeyboardEvent & HtmlElementEvent;

export interface APDropdownOptions {
  content: string,
  value: string,
  id: string,
  disabled?: boolean,
  selected?: boolean,
  icon?: string
}


export interface Search {
  id: string;
  name: string;
  placeholder: string;
}

@Component({
  tag: 'ap-combobox',
  styleUrl: 'combobox.scss',
  shadow: true,
}) */


/* export class APComboBox {

  @Element() el: HTMLElement;

  @Event() selectedValue: EventEmitter;
  @Event() selectedValues: EventEmitter;

  @Prop() color? = 'white';
  @Prop() size? = 'default';
  @Prop() options: APDropdownOptions[] = [];
  @Prop() search: any;
  @Prop() multi = false;
  @Prop() placeholder: string;

  @State() dropdownVisibilityState = false;

  private className = 'ap-dropdown';

  private inputEL: any;
  private badgesContainerEl: HTMLElement;
  private multiValues = [];
  private optionsContainerEl: HTMLElement;

  private currentIndex: number = -1;
  private newIndex: number = null;

  componentDidRender() {
    // catch the random reactHandler key
    const reactProps = Object.keys(this.el).filter(item => item.indexOf('__reactProps') >= 0);

    // if a random reactHandler key is found that means the data comes from Storybook
    if(this.el[reactProps[0]] !== undefined) {
      this.options = this.el[reactProps[0]].options;
      this.search = this.el[reactProps[0]].search;
    }

    // Fermer le dropdown au clic en dehors du composant
    document.addEventListener('click', (event) => {
      if(!event.composedPath().includes(this.el)) {
        this.closeDropdown()
      }
    });

    // Fermer le dropdown au focus en dehors du composant
  document.addEventListener('focusout', (event) => {
      if(event.composedPath().includes(this.el)) {
        this.closeDropdown()
      }
    });

    if(this.el.querySelector('ap-input')) {
      this.inputEL = this.el.querySelector('ap-input');
      //this.inputEL.shadowRoot.querySelector('input').addEventListener('keyup', (e: KeyboardEvent) =>  this.filterOptions(e));
    }

  if(this.multi) {
      this.inputEL = this.el.shadowRoot.querySelector('ap-input');
      this.inputEL.shadowRoot.querySelector('input').addEventListener('keyup', (e: KeyboardEvent) => this.filterOptions(e));
    }
  }

  componentDidLoad() {
    // Gestion de la navigation clavier avec les flèche haut/bas
    this.optionsContainerEl.addEventListener('keyup', (e: HtmlElementKeyboardEvent) => this.handleKeyboardNavigation(e))
  }

  private handleKeyboardNavigation(e: HtmlElementKeyboardEvent): void {
    const liEls = this.el.shadowRoot.querySelectorAll('li');
    const liElsArray = [];

    liEls.forEach(li => liElsArray.push(li))
    const liElsFiltered = liElsArray.filter((li) => !li.classList.contains('ap-dropdown__item--search'));

    if(e.code === "ArrowDown") {
      this.newIndex = (this.currentIndex + 1) % liElsFiltered.length;

      if(liElsFiltered[this.newIndex].classList.contains('ap-dropdown__item--disabled')) {
        this.newIndex = (this.currentIndex + 2) % liElsFiltered.length;
      }

      this.updateIndex(this.newIndex);
    }

    if(e.code === "ArrowUp") {
      this.newIndex = (this.currentIndex - 1 + liElsFiltered.length) % liElsFiltered.length;

      if(liElsFiltered[this.newIndex].classList.contains('ap-dropdown__item--disabled')) {
        this.newIndex = (this.currentIndex - 2 + liElsFiltered.length) % liElsFiltered.length;
      }

      this.updateIndex(this.newIndex);
    }

    if(e.code === "Enter") {
      this.multi
      ? this.handleMultiSelectionValueLogic(liElsFiltered[this.currentIndex], this.currentIndex)
      : this.handleSingleSelectionValueLogic(liElsFiltered[this.currentIndex], this.currentIndex);
    }
  }

  private updateIndex(newIndex): void {
    const prevIndex = this.currentIndex;
    this.currentIndex = newIndex;

    this.optionsContainerEl.setAttribute("aria-activedescendant", `${this.currentIndex}`);

    const prevLi = this.el.shadowRoot.querySelector(`[data-index="${prevIndex}"]`);
    const currentLi = this.el.shadowRoot.querySelector(`[data-index="${this.currentIndex}"]`);

    if(prevLi) prevLi.classList.remove("ap-dropdown__item--selected");
    if(currentLi) currentLi.classList.add("ap-dropdown__item--selected");
  }

  private handleMultiSelectionValueLogic(element: HTMLElement, externalIndex: number) {
    const option = this.options[externalIndex];
    if(option.disabled) return;

    console.log(element, element.classList)
    if(this.isSelected(element)) {
      this.setUnselected(element);
      this.removeBadge(option);
    }
    else {
      this.setSelected(element);
      this.addBadge(option);
    }

    option.selected = !option.selected;

    this.updateMultivalues(option);
  }

  private handleSingleSelectionValueLogic(element: HTMLElement, externalIndex: number) {
    const option = this.options[externalIndex];

    this.unselectLiElements();
    this.activateLi(element);

    this.unselectAllOptions();
    this.selectOption(option);
  }

  private updateMultivalues(option: APDropdownOptions): void {
    // Si l'option est selectionné alors on pousse ses infos (value, id) dans un tableau multiValues
    if(option.selected) {
      this.multiValues.push(option);
    }
    // Sinon on supprime la valeur deselectionnée du tableau multiValues
    else {
      this.multiValues = this.multiValues.filter(element => element.id !== option.id);
    }

    this.selectedValues.emit(this.multiValues);
  }



  private addBadge(option: APDropdownOptions): void {
    if(option.disabled) return;

    const badge = document.createElement('ap-badge');

    badge.setAttribute('content', option.value);
    badge.setAttribute('size', 'sm');
    badge.setAttribute('icon', 'cross');
    badge.setAttribute('icon-position', 'right');
    badge.setAttribute('tabIndex', '0');
    badge.setAttribute('data-option-id', option.id);
    badge.addEventListener('click', () => this.removeBadge(option))
    badge.addEventListener('keyDown', () => this.removeBadge(option))

    this.placeholder = "";
    this.badgesContainerEl.append(badge);
  }

  private removeBadge(option: APDropdownOptions) {
    if(option.disabled) return;

    this.badgesContainerEl.querySelector(`[data-option-id="${option.id}"]`).remove();

    option.selected = !option.selected;

    const li = this.getCorrespondingLi(option);
    this.setUnselected(li);
    this.updateMultivalues(option);
  }


  private getCorrespondingLi(option: APDropdownOptions): HTMLElement {
    return this.el.shadowRoot.getElementById(option.id) as HTMLElement;
  }

  private selectOption(option: APDropdownOptions): void {
    if(option.disabled) return;

    option.selected = true;

    // custom event déclenché
    this.selectedValue.emit(option)

    // Si le dropdown contient un champs texte comme trigger
    if(this.isTriggeredByInput()) {
      this.inputEL.value = option.value;
    }

    this.closeDropdown();
  }

  private unselectAllOptions(): void {
    this.options.forEach((option) => {
      option.selected = false;
    })
  }

  private isTriggeredByInput(): boolean {
    return !isNil(this.el.querySelector('ap-input'));
  }

  private activateLi(element: HTMLElement): void {
    if(this.isEnabled(element)) {
      this.unselectLiElements();
      this.setSelected(element);
    }
  }

  private unselectLiElements() {
    this.el.shadowRoot.querySelectorAll('li').forEach(
      option => option.classList.remove('ap-dropdown__item--selected')
    )
  }

  private isSelected(element: HTMLElement): boolean {
    console.log('ici')
    return element.classList.contains('ap-dropdown__item--selected');
  }

  private setSelected(element: HTMLElement): void {
    element.classList.add('ap-dropdown__item--selected');
    element.querySelector('ap-checkbox')?.check();
  }

  private setUnselected(element: HTMLElement): void {
    console.log(element)
    element.classList.remove('ap-dropdown__item--selected');
    element.querySelector('ap-checkbox')?.unCheck();
  }

  private isDisabled(element: HTMLElement): boolean {
    return element.classList.contains('ap-dropdown__item--disabled');
  }

  private isEnabled(element: HTMLElement): boolean {
    return !this.isDisabled(element);
  }


  // Gestion de l'ouverture/fermture du dropdown au clic
  private handleClick(e: HtmlElementMouseEvent, externalIndex): void {
    const element = e.currentTarget;
    // multi signifie que c'est une liste à choix multiples, avec checkbox
    if(this.multi) {
      this.handleMultiSelectionValueLogic(element, externalIndex);
    }
    else {
      this.handleSingleSelectionValueLogic(element, externalIndex);
    }
  }


  private closeDropdown(): void {
    this.dropdownVisibilityState = false;
    this.el.setAttribute('aria-expanded', 'false');

    this.el.shadowRoot.querySelectorAll('li').forEach((option) => {
      option.style.display = "flex";
    })

    this.inputEL && !this.multi ? this.inputEL.trailingIcon = 'chevron-down' : '';
  }

  private openDropdown(): void {
    this.dropdownVisibilityState = true;
    this.el.setAttribute('aria-expanded', 'true');
    this.inputEL && !this.multi ? this.inputEL.trailingIcon = 'chevron-up' : '';
  }

/*   private contains(option: APDropdownOptions, search: string): boolean {
    return option.content.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
  } */

/*   private filterOptions(e: KeyboardEvent): void {
    if(e.code !== 'Tab' && e.code !== 'Enter') {
      this.el.shadowRoot.querySelectorAll('li').forEach((option) => {
        option.classList.contains('ap-dropdown__item--disabled') ? option.style.display = "none" : '';
        !option.classList.contains('ap-dropdown__item--search') ? option.style.display = "none" : '';
      });

      const search = this.inputEL.value;
      this.options
        .filter(option => this.contains(option, search))
        .map(option => this.getCorrespondingLi(option))
        .forEach(li => li.style.display = "flex");
    }
  }

  render() {
    return <Host color={this.color} size={this.size}>
      <div
        class={`${this.className}__trigger`}
        onClick={() => this.openDropdown()}
        onKeyUp={(e) => e.code === 'Tab' && this.openDropdown()}
      >
        {
          this.multi
          ?
            <Fragment>
              <ap-label required>This is a label</ap-label>
              <div class={`${this.className}__badges-container`} ref={(el) => this.badgesContainerEl = el as HTMLElement} tabIndex={0}>
                {this.placeholder}
              </div>
            </Fragment>

          : <slot name="trigger" />
        }
      </div>
      <ul
        role="listbox"
        ref={(el) => this.optionsContainerEl = el as HTMLElement}
        id="listBoxValues"
        tabIndex={0}
        class={{
          'ap-dropdown__content': true,
          'ap-dropdown__content--visible': this.dropdownVisibilityState
        }}
      >
        {
          this.multi &&
          <li class='ap-dropdown__item ap-dropdown__item--search' tabIndex={-1}>
            <ap-input
              input-id={this.search.id}
              name={this.search.name}
              placeholder={this.search.placeholder}
              trailing-icon="zoom"
            />
          </li>
        }
        {
          this.options.map((option, index) => {
            return (
              <li
                role="option"
                tabIndex={-1}
                id={option.id}
                data-index={index}
                onClick={(e: HtmlElementMouseEvent) => this.handleClick(e, index)}
                class={{
                  'ap-dropdown__item': true,
                  'ap-dropdown__item--disabled': option.disabled,
                  'ap-dropdown__item--selected': option.selected
                }}
              >
                {option.icon && <ap-icon icon={option.icon} />}
                {this.multi && <ap-checkbox disabled={option.disabled} tabIndex={-1}/>}
                {option.content}
              </li>
            )
          })
        }
      </ul>
    </Host>;
  }
}*/
