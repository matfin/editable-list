window.crypto = {
  getRandomValues: jest.fn(),
};

import EditableListComponent from './src/components/editableList';
import ItemInputComponent from './src/components/itemInput';
import ItemsListComponent from './src/components/itemsList';
import ListItemComponent from './src/components/listItem';

customElements.define('list-item', ListItemComponent);
customElements.define('item-input', ItemInputComponent);
customElements.define('items-list', ItemsListComponent);
customElements.define('editable-list', EditableListComponent);
