import { fireEvent, waitFor } from '@testing-library/dom';
import ListItemComponent from 'components/listItem';
import * as utils from 'utils';
import ItemsListComponent from '.';

describe('<items-list>', (): void => {
  const spyGenerateRandomId = jest.spyOn(utils, 'generateRandomId');

  afterEach((): void => {
    spyGenerateRandomId.mockClear();
    document.body.removeChild(document.body.firstChild as HTMLElement);
  });

  afterAll((): void => {
    spyGenerateRandomId.mockRestore();
  });

  it('should render a list of items', async (): Promise<void> => {
    // given
    const component: HTMLElement = <ItemsListComponent>document.createElement('items-list');

    document.body.appendChild(component);

    spyGenerateRandomId
      .mockReturnValueOnce('123')
      .mockReturnValueOnce('456')
      .mockReturnValueOnce('789');

    (component as ItemsListComponent).items = ['one', 'two', 'three'];

    // then
    await waitFor((): void => {
      const listItems = (component as ItemsListComponent).rootListElement?.querySelectorAll('list-item') || [];
      const checks: {id: string, title: string}[] = [
        { id: '123', title: 'one' },
        { id: '456', title: 'two' },
        { id: '789', title: 'three' },
      ]

      expect((listItems).length).toEqual(3);

      checks.forEach((check: { id: string, title: string }, idx: number): void => {
        expect((listItems[idx] as ListItemComponent).id).toEqual(check.id);
        expect((listItems[idx] as ListItemComponent).title).toEqual(check.title);
      });
    });
  });

  it('removes an item from the list on delete button click', async (): Promise<void> => {
    const component: HTMLElement = <ItemsListComponent>document.createElement('items-list');
    document.body.appendChild(component);

    spyGenerateRandomId.mockReturnValue('123');

    (component as ItemsListComponent).addItem('Test');

    await waitFor((): void => {
      // given
      const listItem: ListItemComponent = component.shadowRoot?.querySelector('list-item') as ListItemComponent;
      const deleteButton: HTMLElement = listItem.shadowRoot?.querySelector('[delete]') as HTMLElement;

      // then
      expect(component.shadowRoot?.querySelectorAll('list-item')).toHaveLength(1);
      expect((component as ItemsListComponent).getItems()).toEqual([{ id: '123', isValid: true, title: 'Test' }]);

      // when
      fireEvent.click(deleteButton);

      // then
      expect(component.shadowRoot?.querySelectorAll('list-item')).toHaveLength(0);
      expect((component as ItemsListComponent).getItems()).toEqual([]);
    });
  });

  it('adds an item to the list, then clears them all', (): void => {
    // given
    const component: HTMLElement = <ItemsListComponent>document.createElement('items-list');

    // then
    document.body.appendChild(component);
    spyGenerateRandomId.mockReturnValue('123');

    // whem
    (component as ItemsListComponent).addItem('Test one', true);
    (component as ItemsListComponent).addItem('Test two', false);

    // then
    expect((component as ItemsListComponent).getItems()).toEqual([
      { id: expect.any(String), isValid: true, title: 'Test one' },
      { id: expect.any(String), isValid: false, title: 'Test two' }
    ]);

    // when
    (component as ItemsListComponent).clearItems();

    // then
    expect((component as ItemsListComponent).getItems()).toEqual([]);
  });

  it('sets up the input slot', async (): Promise<void> => {
    // given
    const component: HTMLElement = <ItemsListComponent>document.createElement('items-list');

    // when
    document.body.appendChild(component);

    await waitFor((): void => {
      // given
      const slot: HTMLSlotElement = <HTMLSlotElement>component.shadowRoot?.querySelector('slot');
      const input: HTMLInputElement = document.createElement('input');

      // when
      input.setAttribute('slot', 'input');
      component.appendChild(input);

      spyGenerateRandomId.mockReturnValue('123');
      (component as ItemsListComponent).addItem('Test');

      // then
      expect(slot.assignedNodes().length).toEqual(1);
    });
  });
});
