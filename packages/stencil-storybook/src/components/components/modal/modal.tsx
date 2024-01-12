import { Component, Prop, h, Host, Element, Method } from '@stencil/core';

@Component({
  tag: 'ap-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class APModal {

  @Element() el: HTMLElement;

  @Prop() color: string = 'default';
  @Prop() size: string = 'default';
  @Prop() direction: string = 'center';
  @Prop() opened: boolean = false;

  private className = "ap-panel";
  private modalEl: any;
  private dialogEl: HTMLDialogElement;

  @Method()
  async openModal() {
    this.dialogEl.showModal();
  }

  @Method()
  async closeModal() {
    this.dialogEl.close();
  }

  componentDidLoad() {
    document.querySelectorAll('[data-trigger-modal').forEach((trigger: HTMLDivElement) => {
      trigger.addEventListener('click', () => {
        if(trigger.dataset.triggerModal === this.modalEl.dataset.modal) this.openModal();
      });

      trigger.addEventListener('keydown', (e) => {
        if((trigger.dataset.triggerModal === this.modalEl.dataset.modal) && e.key === 'Enter') this.openModal();
      });
    });

    // Permet de fermer la modal au clic sur le backdrop
    this.dialogEl.addEventListener('click', (event) => {
      const rect = this.dialogEl.getBoundingClientRect();
      if (rect.left > event.clientX || rect.right < event.clientX || rect.top > event.clientY || rect.bottom < event.clientY) {
        this.dialogEl.close();
      }
    })

    this.opened && this.openModal();
  }

  render() {
    return <Host class={this.className} color={this.color} size={this.size} ref={(el) => this.modalEl = el as HTMLDivElement} direction={this.direction}>
            <dialog ref={(el) => this.dialogEl = el as HTMLDialogElement}>
              <div class={`${this.className}__close`}>
                <ap-button
                  content='Close'
                  size='sm'
                  icon='cross'
                  text
                  onClick={() => this.closeModal()}
                  onKeyDown={(e) => e.key === 'Enter' && this.closeModal()}
                />
              </div>
              <slot />
            </dialog>
          </Host>
  }
}
