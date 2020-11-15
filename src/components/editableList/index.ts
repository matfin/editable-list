class EditableList extends HTMLElement {
  constructor() {
    super();

    const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' });
    const container: HTMLDivElement = document.createElement('div');

    const content: HTMLParagraphElement = document.createElement('p');
    const text: Text = document.createTextNode('I am a custom element');

    content.appendChild(text);
    container.appendChild(content);
    shadowRoot.appendChild(container);
  }
}

export default EditableList;
