import ItemInputComponent from 'components/itemInput';
import ItemsListComponent from 'components/itemsList';
import ListItemComponent from 'components/listItem';
import EditableListComponent from 'components/editableList';

((): void => {
  customElements.define('item-input', ItemInputComponent);
  customElements.define('list-item', ListItemComponent);
  customElements.define('items-list', ItemsListComponent);
  customElements.define('editable-list', EditableListComponent);
})();


