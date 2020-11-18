import template from './template';

export class ListItemComponent extends HTMLElement {
  private deleteButton: HTMLButtonElement | null | undefined;
  private clickDeleteCallback: ((id: string) => void) | null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.clickDeleteCallback = null;
  }

  static get observedAttributes(): string[] {
    return ['id', 'title', 'onClickDelete'];
  }

  setAttribute(name: string, value: string): void {
    super.setAttribute(name, value);
    this.render();
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string): void {
    if (oldVal !== newVal) {
      if (name === 'title') {
        this.title = newVal;
      } else if (name === 'id') {
        this.id = newVal;
      }
    }
  }

  connectedCallback(): void {
    const { shadowRoot } = this;
    const templateInstance: DocumentFragment = document.importNode(template.content, true);

    shadowRoot?.appendChild(templateInstance);
    this.deleteButton = this.shadowRoot?.querySelector('[delete]');
    this.deleteButton?.addEventListener('click', this.onDeleteButtonClick);

    this.render();
  }

  render(): void {
    const { shadowRoot } = this;
    const titleNode = shadowRoot?.querySelector('[title]');

    if (titleNode) {
      titleNode.innerHTML = this.title;
    }
  }

  disconnectedCallback(): void {
    this.deleteButton?.removeEventListener('click', this.onDeleteButtonClick);
  }

  onDeleteButtonClick(): void {
    if (this.clickDeleteCallback) {
      this.clickDeleteCallback(this.id);
    }
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

  set onClickDelete(onClickDelete: (id: string) => void) {
    this.clickDeleteCallback = onClickDelete;
  }
}

export default ListItemComponent;
