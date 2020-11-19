import template from './template';

class ItemInputComponent extends HTMLElement {
  private inputElement: HTMLInputElement | null | undefined;
  private onInputCallback: ((e: Event) => void) | null;
  private onKeydownCallback: ((e: KeyboardEvent) => void) | null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.inputElement = null;
    this.onInputCallback = null;
    this.onKeydownCallback = null;

    this.input = this.input.bind(this);
    this.key = this.key.bind(this);
  }

  static get observedAttributes(): string[] {
    return ['onChange', 'onKeydown', 'placeholder', 'value'];
  }

  setAttribute(name: string, value: string): void {
    super.setAttribute(name, value);
    this.render();
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string): void {
    if (oldVal !== newVal) {
      if (name === 'placeholder') {
        this.placeHolder = newVal;
      } else if (name === 'value') {
        this.value = newVal;
      }
    }
  }

  connectedCallback(): void {
    const { shadowRoot } = this;
    const templateInstance: DocumentFragment = document.importNode(template.content, true);

    shadowRoot?.appendChild(templateInstance);
    this.inputElement = shadowRoot?.querySelector('input');
    this.inputElement?.addEventListener('input', this.input);
    shadowRoot?.addEventListener('keydown', this.key);

    this.render();
  }

  disconnectedCallback(): void {
    const { shadowRoot } = this;

    this.inputElement?.removeEventListener('input', this.input);
    shadowRoot?.removeEventListener('keydown', this.key);
  }

  render(): void {
    if (this.inputElement) {
      this.inputElement.placeholder = this.placeHolder;
      this.inputElement.value = this.value;
    }
  }

  input(e: Event): void {
    if (this.onInputCallback) {
      this.onInputCallback(<KeyboardEvent>e);
    }
  }

  key(e: Event): void {
    if (this.onKeydownCallback) {
      this.onKeydownCallback(<KeyboardEvent>e);
    }
  }

  get placeHolder(): string {
    return this.getAttribute('placeholder') || '';
  }

  set placeHolder(placeholder: string) {
    this.setAttribute('placeholder', placeholder);
  }

  get value(): string {
    return this.getAttribute('value') || '';
  }

  set value(value: string) {
    this.setAttribute('value', value);
  }

  set onInput(onInput: (e: Event) => void) {
    this.onInputCallback = onInput;
  }

  set onKeydown(onKeydown: (e: KeyboardEvent) => void) {
    this.onKeydownCallback = onKeydown;
  }
}

export default ItemInputComponent;
