/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'ap-web-components';


@ProxyCmp({
  inputs: ['ariaControls', 'collapseIcon', 'color', 'expandIcon', 'expanded', 'iconPosition', 'size', 'triggerText']
})
@Component({
  selector: 'ap-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaControls', 'collapseIcon', 'color', 'expandIcon', 'expanded', 'iconPosition', 'size', 'triggerText'],
})
export class ApAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApAccordion extends Components.ApAccordion {}


@ProxyCmp({
  inputs: ['ariaControls', 'collapseIcon', 'color', 'expandIcon', 'expanded', 'iconPosition', 'rightText', 'size', 'triggerText']
})
@Component({
  selector: 'ap-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaControls', 'collapseIcon', 'color', 'expandIcon', 'expanded', 'iconPosition', 'rightText', 'size', 'triggerText'],
})
export class ApAccordionItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandCollapse']);
  }
}


export declare interface ApAccordionItem extends Components.ApAccordionItem {

  expandCollapse: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['close', 'color', 'icon', 'size']
})
@Component({
  selector: 'ap-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['close', 'color', 'icon', 'size'],
})
export class ApAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApAlert extends Components.ApAlert {}


@ProxyCmp({
  inputs: ['color', 'content', 'icon', 'iconOnly', 'iconPosition', 'outlined', 'size', 'text']
})
@Component({
  selector: 'ap-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'icon', 'iconOnly', 'iconPosition', 'outlined', 'size', 'text'],
})
export class ApBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickedBadge']);
  }
}


export declare interface ApBadge extends Components.ApBadge {

  clickedBadge: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'current', 'size']
})
@Component({
  selector: 'ap-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'current', 'size'],
})
export class ApBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApBreadcrumb extends Components.ApBreadcrumb {}


@ProxyCmp({
  inputs: ['color', 'content', 'disabled', 'icon', 'iconOnly', 'iconPosition', 'outlined', 'size', 'text', 'type']
})
@Component({
  selector: 'ap-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'disabled', 'icon', 'iconOnly', 'iconPosition', 'outlined', 'size', 'text', 'type'],
})
export class ApButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickedButton']);
  }
}


export declare interface ApButton extends Components.ApButton {

  clickedButton: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['assistiveText', 'border', 'checked', 'color', 'disabled', 'error', 'errorText', 'indeterminate', 'inputId', 'label', 'required', 'size'],
  methods: ['check', 'unCheck']
})
@Component({
  selector: 'ap-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['assistiveText', 'border', 'checked', 'color', 'disabled', 'error', 'errorText', 'indeterminate', 'inputId', 'label', 'required', 'size'],
})
export class ApCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickedCheckbox']);
  }
}


export declare interface ApCheckbox extends Components.ApCheckbox {

  clickedCheckbox: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'data', 'placeholder', 'size']
})
@Component({
  selector: 'ap-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'data', 'placeholder', 'size'],
})
export class ApDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickDropdownItem']);
  }
}


export declare interface ApDropdown extends Components.ApDropdown {

  clickDropdownItem: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'content', 'size']
})
@Component({
  selector: 'ap-error-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'size'],
})
export class ApErrorText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApErrorText extends Components.ApErrorText {}


@ProxyCmp({
  inputs: ['ariaControls', 'collapseIcon', 'color', 'expandIcon', 'expanded', 'iconPosition', 'size', 'triggerText']
})
@Component({
  selector: 'ap-expand',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaControls', 'collapseIcon', 'color', 'expandIcon', 'expanded', 'iconPosition', 'size', 'triggerText'],
})
export class ApExpand {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApExpand extends Components.ApExpand {}


@ProxyCmp({
  inputs: ['color', 'label', 'required', 'size']
})
@Component({
  selector: 'ap-fieldset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'label', 'required', 'size'],
})
export class ApFieldset {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApFieldset extends Components.ApFieldset {}


@ProxyCmp({
  inputs: ['rowGap']
})
@Component({
  selector: 'ap-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['rowGap'],
})
export class ApGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApGrid extends Components.ApGrid {}


@ProxyCmp({
  inputs: ['color', 'content', 'size', 'weight']
})
@Component({
  selector: 'ap-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'size', 'weight'],
})
export class ApHeading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApHeading extends Components.ApHeading {}


@ProxyCmp({
  inputs: ['color', 'icon', 'rounded', 'size']
})
@Component({
  selector: 'ap-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'icon', 'rounded', 'size'],
})
export class ApIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApIcon extends Components.ApIcon {}


@ProxyCmp({
  inputs: ['assistiveText', 'color', 'disabled', 'error', 'errorText', 'inputId', 'label', 'leadingIcon', 'name', 'placeholder', 'required', 'size', 'trailingIcon', 'type', 'value']
})
@Component({
  selector: 'ap-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['assistiveText', 'color', 'disabled', 'error', 'errorText', 'inputId', 'label', 'leadingIcon', 'name', 'placeholder', 'required', 'size', 'trailingIcon', 'type', 'value'],
})
export class ApInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputTyping', 'inputFilled']);
  }
}


export declare interface ApInput extends Components.ApInput {

  inputTyping: EventEmitter<CustomEvent<any>>;

  inputFilled: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['assistiveText', 'color', 'content', 'for', 'required', 'size', 'tooltip']
})
@Component({
  selector: 'ap-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['assistiveText', 'color', 'content', 'for', 'required', 'size', 'tooltip'],
})
export class ApLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApLabel extends Components.ApLabel {}


@ProxyCmp({
  inputs: ['color', 'content', 'icon', 'iconPosition', 'size']
})
@Component({
  selector: 'ap-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'icon', 'iconPosition', 'size'],
})
export class ApLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApLink extends Components.ApLink {}


@ProxyCmp({
  inputs: ['color', 'direction', 'opened', 'size'],
  methods: ['openModal', 'closeModal']
})
@Component({
  selector: 'ap-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'direction', 'opened', 'size'],
})
export class ApModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApModal extends Components.ApModal {}


@ProxyCmp({
  inputs: ['color', 'content', 'size', 'weight']
})
@Component({
  selector: 'ap-paragraph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'size', 'weight'],
})
export class ApParagraph {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApParagraph extends Components.ApParagraph {}


@ProxyCmp({
  inputs: ['assistiveText', 'border', 'checked', 'color', 'disabled', 'error', 'errorText', 'indeterminate', 'inputId', 'inputName', 'label', 'required', 'size', 'value']
})
@Component({
  selector: 'ap-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['assistiveText', 'border', 'checked', 'color', 'disabled', 'error', 'errorText', 'indeterminate', 'inputId', 'inputName', 'label', 'required', 'size', 'value'],
})
export class ApRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickedRadio']);
  }
}


export declare interface ApRadio extends Components.ApRadio {

  clickedRadio: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'content', 'icon', 'size']
})
@Component({
  selector: 'ap-segmented-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'icon', 'size'],
})
export class ApSegmentedButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApSegmentedButtons extends Components.ApSegmentedButtons {}


@ProxyCmp({
  inputs: ['color', 'content', 'icon', 'size']
})
@Component({
  selector: 'ap-split-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'icon', 'size'],
})
export class ApSplitButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickedAction']);
  }
}


export declare interface ApSplitButton extends Components.ApSplitButton {

  clickedAction: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['expanded', 'numberOfLines', 'readLessText', 'readMoreText']
})
@Component({
  selector: 'ap-spoiler',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expanded', 'numberOfLines', 'readLessText', 'readMoreText'],
})
export class ApSpoiler {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApSpoiler extends Components.ApSpoiler {}


@ProxyCmp({
  inputs: ['assistiveText', 'border', 'checked', 'color', 'disabled', 'error', 'errorText', 'indeterminate', 'inputId', 'label', 'leadingIcon', 'required', 'size', 'trailingIcon']
})
@Component({
  selector: 'ap-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['assistiveText', 'border', 'checked', 'color', 'disabled', 'error', 'errorText', 'indeterminate', 'inputId', 'label', 'leadingIcon', 'required', 'size', 'trailingIcon'],
})
export class ApSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickedRadio']);
  }
}


export declare interface ApSwitch extends Components.ApSwitch {

  clickedRadio: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'size', 'type']
})
@Component({
  selector: 'ap-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'size', 'type'],
})
export class ApTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApTabs extends Components.ApTabs {}


@ProxyCmp({
  inputs: ['color', 'content', 'placement', 'size']
})
@Component({
  selector: 'ap-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'placement', 'size'],
})
export class ApTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ApTooltip extends Components.ApTooltip {}


