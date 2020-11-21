import { ShortcutKeys } from 'models';
import { splitMultipleInputs } from 'utils';
import ItemInputComponent from 'components/itemInput';
import ItemsListComponent from 'components/itemsList';
import template from './template';

class EditableListComponent extends HTMLElement {
  private validateFn: ((str: string) => boolean) | null;
  private itemsListElement: ItemsListComponent | null | undefined;
  private listItemInputElement: ItemInputComponent | null | undefined;
  private currentInputValue: string;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.currentInputValue = '';
    this.itemsListElement = null;
    this.listItemInputElement = null;
    this.validateFn = null;

    this.addItemToList = this.addItemToList.bind(this);
    this.clearInputValue = this.clearInputValue.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
  }

  connectedCallback(): void {
    const { shadowRoot } = this;
    const templateInstance: DocumentFragment = document.importNode(template.content, true);

    shadowRoot?.appendChild(templateInstance);

    this.listItemInputElement = shadowRoot?.querySelector('item-input');
    this.itemsListElement = shadowRoot?.querySelector('items-list');

    if (this.listItemInputElement) {
      this.listItemInputElement.onInput = this.onInput;
      this.listItemInputElement.onKeydown = this.onKeydown;
    }
  }

  private onInput(e: Event): void {
    const { value } = e.currentTarget as HTMLInputElement;
    const inputs: string[] = splitMultipleInputs(value);

    if (inputs.length > 1) {
      inputs.forEach(this.addItemToList);
      this.clearInputValue();
    } else {
      this.currentInputValue = value;
    }
  }

  private onKeydown(e: KeyboardEvent): void {
    const { key } = e;

    switch(key) {
      case ShortcutKeys.COMMA:
      case ShortcutKeys.ENTER: {
        e.preventDefault();
        this.addItemToList(this.currentInputValue);
        this.clearInputValue();
      }
    }
  }

  private addItemToList(title: string): void {
    if(this.itemsListElement) {
      const isValid = this.validateFn ? this.validateFn(title) : true;

      this.itemsListElement.addItem(title, isValid);
    }
  }

  private clearInputValue(): void {
    if (this.listItemInputElement) {
      this.currentInputValue = '';
      this.listItemInputElement.value = '';
    }
  }

  set validationFunction(fn: (str: string) => boolean) {
    this.validateFn = fn;
  }
}

export default EditableListComponent;
