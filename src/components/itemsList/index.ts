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

    this.addItem = this.addItem.bind(this);
    this.appendItemToList = this.appendItemToList.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.getItems = this.getItems.bind(this);
    this.removeItemFromList = this.removeItemFromList.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.render = this.render.bind(this);

    this.listElement = null;
    this.slotElement = null;
    this.listItems = [];
  }

  private appendItemToList(item: ListItem): void {
    const { id, isValid, title } = item;
    const listItem: ListItemComponent = <ListItemComponent>document.createElement('list-item');
    /* istanbul ignore next */
    const slotAssigned: boolean = (this.slotElement?.assignedNodes() || []).length > 0;

    listItem.id = id;
    listItem.isInvalid = !isValid;
    listItem.title = title;
    listItem.onClickDelete = (id: string): void => this.removeItem(id);

    if (this.slotElement && slotAssigned) {
      this.listElement?.insertBefore(listItem, this.slotElement);
    } else {
      this.listElement?.appendChild(listItem);
    }
  }

  private removeItemFromList(id: string): void {
    const itemNode: HTMLElement | null | undefined = this.listElement?.querySelector(`list-item[id="${id}"]`);

    /* istanbul ignore next */
    if (itemNode) {
      itemNode.parentNode?.removeChild(itemNode);
    }
  }

  private render(): void {
    /* istanbul ignore next */
    if (this.listElement) {
      this.listItems.forEach((item: ListItem): void => this.appendItemToList(item));
    }
  }

  private removeItem(id: string): void {
    /* istanbul ignore next */
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
    /* istanbul ignore next */
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
    /* istanbul ignore next */
    const listItems: NodeListOf<HTMLElement> | never[] = this.listElement?.querySelectorAll('list-item') || [];

    listItems.forEach((listItem: HTMLElement) => listItem.parentNode?.removeChild(listItem));
    this.listItems = [];
  }

  getItems(): ListItem[] {
    return this.listItems;
  }

  get rootListElement(): HTMLUListElement | null | undefined {
    return this.listElement;
  }

  set items(titles: string[]) {
    const items = titles.map((title: string): ListItem => ({
      id: generateRandomId(),
      title,
    }));

    this.clearItems();
    this.listItems = items;
    this.render();
  }
}

export default ItemsListComponent;
