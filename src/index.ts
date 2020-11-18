import EditableList from 'components/editableList';
import ListItemComponent from 'components/listItem';

((): void => {
  customElements.define('list-item', ListItemComponent);
  customElements.define('editable-list', EditableList);
})();


