import EditableList from 'components/editableList';
import ListItem from 'components/listItem';

((): void => {
  customElements.define('list-item', ListItem);
  customElements.define('editable-list', EditableList);
})();


