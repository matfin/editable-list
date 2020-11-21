import { ListItem } from 'models';
import { generateRandomId } from 'utils';
import ListItemComponent from 'components/listItem';
import template from './template';

class ItemsListComponent extends HTMLElement {
  private listItems: ListItem[] = [];
  private listElement: HTMLUListElement | null | undefined;
  private slotElement: HTMLSlotElement | null | undefined;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.listElement = null;
    this.slotElement = null;
    this.listItems = [];
  }

  private appendItemToList(item: ListItem): void {
    const { id, isValid, title } = item;
    const listItem: ListItemComponent = <ListItemComponent>document.createElement('list-item');

    listItem.id = id;
    listItem.isInvalid = !isValid;
    listItem.title = title;
    listItem.onClickDelete = (id: string): void => this.removeItem(id);

    if (this.slotElement) {
      this.listElement?.insertBefore(listItem, this.slotElement);
    } else {
      this.listElement?.appendChild(listItem);
    }
  }

  private removeItemFromList(id: string): void {
    const itemNode: HTMLElement | null | undefined = this.listElement?.querySelector(`list-item[id="${id}"]`);

    if (itemNode) {
      itemNode.parentNode?.removeChild(itemNode);
    }
  }

  private render(): void {
    if (this.listElement) {
      this.clearItems();
      this.listItems.forEach((item: ListItem): void => this.appendItemToList(item));
    }
  }

  private removeItem(id: string): void {
    if (this.listElement) {
      this.removeItemFromList(id);
      this.listItems = this.listItems.filter((item: ListItem): boolean => id !== item.id);
    }
  }

  connectedCallback(): void {
    const { shadowRoot } = this;
    const templateInstance: DocumentFragment = document.importNode(template.content, true);

    shadowRoot?.appendChild(templateInstance);
    this.listElement = shadowRoot?.querySelector('[list]');
    this.slotElement = shadowRoot?.querySelector('slot');
    this.render();
  }

  addItem(title: string, isValid = true): void {
    if (this.listElement) {
      const item: ListItem = {
        id: generateRandomId(),
        isValid,
        title,
      };
      this.appendItemToList(item);
      this.listItems.push(item);
    }
  };

  clearItems(): void {
    const listItems: NodeListOf<HTMLElement> | never[] = this.listElement?.querySelectorAll('list-item') || [];

    listItems.forEach((listItem: HTMLElement) => listItem.parentNode?.removeChild(listItem));
    this.listItems = [];
  }

  getItems(): ListItem[] {
    return this.listItems;
  }

  set items(titles: string[]) {
    const items = titles.map((title: string): ListItem => ({
      id: generateRandomId(),
      title,
    }));

    this.listItems = items;
    this.render();
  }
}

export default ItemsListComponent;
