import template from './template';

export class ListItem extends HTMLElement {
  private deleteButton: HTMLButtonElement | null | undefined;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }

  static get observedAttributes(): string[] {
    return ['title'];
  }

  setAttribute(name: string, value: string): void {
    super.setAttribute(name, value);
    this.render();
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string): void {
    if (name === 'title' && oldVal !== newVal) {
      this.title = newVal;
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
    console.log('Delete clicked', this.title);
  }

  get title(): string {
    return this.getAttribute('title') || '';
  }

  set title(title: string) {
    this.setAttribute('title', title);
  }
}

export default ListItem;
