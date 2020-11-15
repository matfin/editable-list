import ListItem from 'components/listItem';

class EditableList extends HTMLElement {
  constructor() {
    super();

    const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' });
    const container: HTMLUListElement = document.createElement('ul');

    // const item: HTMLElement = document.createElement('list-item');
    // item.setAttribute('title', 'Hello!');



    for(let i = 0; i < 3; i++) {
      const item: HTMLElement = document.createElement('list-item');
      const text: string = `Item: ${i}`;

      item.setAttribute('title', text);
      container.appendChild(item);
    }

    shadowRoot.appendChild(container);
  }
}

export default EditableList;
