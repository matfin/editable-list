import template from './template';

class ItemInputComponent extends HTMLElement {
  private inputElement: HTMLInputElement | null | undefined;
  private onBlurCallback: ((e: Event) => void) | null;
  private onInputCallback: ((e: Event) => void) | null;
  private onKeydownCallback: ((e: KeyboardEvent) => void) | null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.inputElement = null;
    this.onBlurCallback = null;
    this.onInputCallback = null;
    this.onKeydownCallback = null;

    this.blurred = this.blurred.bind(this);
    this.input = this.input.bind(this);
    this.key = this.key.bind(this);
  }

  static get observedAttributes(): string[] {
    return ['placeholder', 'value'];
  }

  private render(): void {
    /* istanbul ignore next */
    if (this.inputElement) {
      this.inputElement.placeholder = this.placeHolder;
      this.inputElement.value = this.value;
    }
  }

  private blurred(e: Event): void {
    if(this.onBlurCallback) {
      this.onBlurCallback(<KeyboardEvent>e);
    }
  }

  private input(e: Event): void {
    if (this.onInputCallback) {
      this.onInputCallback(<KeyboardEvent>e);
    }
  }

  private key(e: Event): void {
    if (this.onKeydownCallback) {
      this.onKeydownCallback(<KeyboardEvent>e);
    }
  }

  setAttribute(name: string, value: string): void {
    super.setAttribute(name, value);
    this.render();
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string): void {
    if (oldVal !== newVal) {
      switch(name) {
        case 'placeholder': {
          this.placeHolder = newVal;
          break;
        }
        case 'value': {
          this.value = newVal;
          break;
        }
      }
    }
  }

  connectedCallback(): void {
    const { shadowRoot } = this;
    const templateInstance: DocumentFragment = document.importNode(template.content, true);

    shadowRoot?.appendChild(templateInstance);
    this.inputElement = shadowRoot?.querySelector('input');
    this.inputElement?.addEventListener('input', this.input);
    this.inputElement?.addEventListener('blur', this.blurred);
    shadowRoot?.addEventListener('keydown', this.key);

    this.render();
  }

  disconnectedCallback(): void {
    const { shadowRoot } = this;

    this.inputElement?.removeEventListener('input', this.input);
    shadowRoot?.removeEventListener('keydown', this.key);
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

  set onBlur(onBlur: (e: Event) => void) {
    this.onBlurCallback = onBlur;
  }

  set onInput(onInput: (e: Event) => void) {
    this.onInputCallback = onInput;
  }

  set onKeydown(onKeydown: (e: KeyboardEvent) => void) {
    this.onKeydownCallback = onKeydown;
  }
}

export default ItemInputComponent;
