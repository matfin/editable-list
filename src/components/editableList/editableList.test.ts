import { waitFor, fireEvent } from '@testing-library/dom';
import { ListItem, ShortcutKeys } from 'models';
import * as utils from 'utils';
import ItemInputComponent from 'components/itemInput';
import ItemsListComponent from 'components/itemsList';
import EditableListComponent from '.';

describe('<editable-list>', (): void => {
  const spyGenerateRandomId = jest.spyOn(utils, 'generateRandomId');

  afterEach((): void => {
    spyGenerateRandomId.mockClear();
    document.body.removeChild(document.body.firstChild as HTMLElement);
  });

  afterAll((): void => {
    spyGenerateRandomId.mockRestore();
  });

  it('adds items to the list', async (): Promise<void> => {
    const firstRun: ListItem[] = [
      { id: '123', isValid: true, title: 'one' },
    ];
    const secondRun: ListItem[] = [
      ...firstRun,
      { id: '456', isValid: true, title: 'two' },
    ];
    const thirdRun: ListItem[] = [
      ...secondRun,
      { id: '789', isValid: true, title: 'three' },
      { id: '101', isValid: true, title: 'four' },
    ];
    const component: HTMLElement = <EditableListComponent>document.createElement('editable-list');

    document.body.appendChild(component);
    spyGenerateRandomId
      .mockReturnValueOnce('123')
      .mockReturnValueOnce('456')
      .mockReturnValueOnce('789')
      .mockReturnValueOnce('101');

    await waitFor((): void => {
      // given
      const itemInput: ItemInputComponent = component.shadowRoot?.querySelector('item-input') as ItemInputComponent;
      const itemsList: ItemsListComponent = component.shadowRoot?.querySelector('items-list') as ItemsListComponent;
      const input: HTMLInputElement = itemInput.shadowRoot?.querySelector('input') as HTMLInputElement;

      // when there is empty input
      fireEvent.blur(input);

      // then there should be no items
      expect(itemsList.getItems().length).toEqual(0);

      // when there is input
      input.value = 'one';
      fireEvent.input(input);
      fireEvent.blur(input);

      // then there should be items
      expect(itemsList.getItems()).toEqual(firstRun);

      // when comma is entered
      input.value = 'two';
      fireEvent.input(input);
      fireEvent.keyDown(itemInput.shadowRoot as ShadowRoot, { key: ShortcutKeys.COMMA });

      // then there should be another item added
      expect(itemsList.getItems()).toEqual(secondRun);

      // when there are multiple values
      input.value = 'three, four';
      fireEvent.input(input);

      // then there should be more elements added in bulk
      expect(itemsList.getItems()).toEqual(thirdRun);

      // when comma is entered with no value
      input.value = '';
      fireEvent.input(input);
      fireEvent.keyDown(itemInput.shadowRoot as ShadowRoot, { key: ShortcutKeys.COMMA });

      // there should be no new items
      expect(itemsList.getItems().length).toEqual(4);
    });
  });

  it('adds a custom validation function', async (): Promise<void> => {
    const component: HTMLElement = <EditableListComponent>document.createElement('editable-list');

    // set the validation function
    (component as EditableListComponent).validationFunction = (str: string): boolean => str === 'two';

    document.body.appendChild(component);
    spyGenerateRandomId
      .mockReturnValueOnce('123')
      .mockReturnValue('456');

    await waitFor((): void => {
      // given
      const itemInput: ItemInputComponent = component.shadowRoot?.querySelector('item-input') as ItemInputComponent;
      const itemsList: ItemsListComponent = component.shadowRoot?.querySelector('items-list') as ItemsListComponent;
      const input: HTMLInputElement = itemInput.shadowRoot?.querySelector('input') as HTMLInputElement;

      // add the items
      input.value = 'one, two';
      fireEvent.input(input);

      // check
      expect(itemsList.getItems()).toEqual([
        { id: '123', isValid: false, title: 'one' },
        { id: '456', isValid: true, title: 'two' }
      ]);
    });
  });
});
