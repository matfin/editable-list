import template from './template';

export class ListItemComponent extends HTMLElement {
  private deleteButton: HTMLButtonElement | null | undefined;
  private clickDeleteCallback: ((id: string) => void) | null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.deleteButton = null;

    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.clickDeleteCallback = null;
  }

  static get observedAttributes(): string[] {
    return ['id', 'invalid', 'title', 'onClickDelete'];
  }

  private render(): void {
    const { shadowRoot } = this;
    const titleNode = shadowRoot?.querySelector('[title]');

    /* istanbul ignore next */
    if (titleNode) {
      titleNode.innerHTML = this.title;
    }
  }

  private onDeleteButtonClick(): void {
    if (this.clickDeleteCallback) {
      this.clickDeleteCallback(this.id);
    }
  }

  setAttribute(name: string, value: string): void {
    super.setAttribute(name, value);
    this.render();
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string): void {
    if (oldVal !== newVal) {
      switch(name) {
        case 'title': {
          this.title = newVal;
          break;
        }
        case 'id': {
          this.id = newVal;
          break;
        }
        case 'invalid': {
          this.isInvalid = newVal !== null;
          break;
        }
      }
    }
  }

  connectedCallback(): void {
    const { shadowRoot } = this;
    const templateInstance: DocumentFragment = document.importNode(template.content, true);

    shadowRoot?.appendChild(templateInstance);
    this.deleteButton = shadowRoot?.querySelector('[delete]');
    this.deleteButton?.addEventListener('click', this.onDeleteButtonClick);

    this.render();
  }

  disconnectedCallback(): void {
    this.deleteButton?.removeEventListener('click', this.onDeleteButtonClick);
  }

  get id(): string {
    return this.getAttribute('id') || '';
  }

  set id(id: string) {
    this.setAttribute('id', id);
  }

  get title(): string {
    return this.getAttribute('title') || '';
  }

  set title(title: string) {
    this.setAttribute('title', title);
  }

  get isInvalid(): boolean {
    return this.hasAttribute('invalid');
  }

  set isInvalid(isInvalid: boolean) {
    if (isInvalid) {
      this.setAttribute('invalid', 'true');
    } else {
      this.removeAttribute('invalid');
    }
  }

  set onClickDelete(onClickDelete: (id: string) => void) {
    this.clickDeleteCallback = onClickDelete;
  }
}

export default ListItemComponent;
