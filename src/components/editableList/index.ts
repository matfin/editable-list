import { ListItem } from 'models';
import ListItemComponent from 'components/listItem';
import template from './template';

class EditableListComponent extends HTMLElement {
  private listItems: ListItem[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.listItems = [
      { title: 'matfin@gmail.com', id: '123' },
      { title: 'me@mattfinucane.com', id: '456' },
      { title: 'matfin@hotmail.com', id: '789' },
    ];
  }

  private appendItemToList(item: ListItem, list: HTMLElement): void {
    const { id, title } = item;
    const listItem: ListItemComponent = <ListItemComponent>document.createElement('list-item');

    listItem.setAttribute('title', title);
    listItem.setAttribute('id', id);
    listItem.onClickDelete = (id: string): void => this.removeItem(id);
    list.appendChild(listItem);
  }

  private removeItemFromList(id: string, list: HTMLElement): void {
    const itemNode: HTMLElement | null = list.querySelector(`list-item[id="${id}"]`);

    if (itemNode) {
      itemNode.parentNode?.removeChild(itemNode);
    }
  }

  connectedCallback(): void {
    const { shadowRoot } = this;
    const templateInstance: DocumentFragment = document.importNode(template.content, true);

    shadowRoot?.appendChild(templateInstance);
    this.render();
  }

  render(): void {
    const { shadowRoot } = this;
    const list: HTMLUListElement | null | undefined = shadowRoot?.querySelector('[list]');

    if (list) {
      list.innerHTML = ``;
      this.listItems.forEach((item: ListItem): void => this.appendItemToList(item, list));
    }
  }

  setItems(items: ListItem[]): void {
    this.listItems = items;
    this.render();
  }

  addItem(item: ListItem): void {
    const { shadowRoot } = this;
    const list: HTMLUListElement | null | undefined = shadowRoot?.querySelector('[list]');

    if (list) {
      this.appendItemToList(item, list);
      this.listItems.push(item);
    }
  };

  removeItem(id: string): void {
    const { shadowRoot } = this;
    const list: HTMLUListElement | null | undefined = shadowRoot?.querySelector('[list]');

    if (list) {
      this.removeItemFromList(id, list);
      this.listItems = this.listItems.filter((item: ListItem): boolean => id !== item.id);
    }
  }
}

export default EditableListComponent;
