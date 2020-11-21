import { waitFor } from '@testing-library/dom';
import fireEvent from '@testing-library/user-event';
import ListItemComponent from '.';

describe('<list-item>', (): void => {
  afterEach((): void => {
    document.body.removeChild(document.body.firstChild as HTMLElement);
  });

  it('should render the component with the correct title and id', async (): Promise<void> => {
    // given
    const component: HTMLElement = <ListItemComponent>document.createElement('list-item');

    document.body.appendChild(component);
    component.id = '1234';
    component.title = 'Test';
    component.setAttribute('test', 'true');

    // then
    await waitFor((): void => {
      expect(component.shadowRoot?.querySelector('span')?.textContent).toEqual('Test');
      expect(component.getAttribute('id')).toEqual('1234');
    });
  });

  it('should have an empty id and not be invalid', (): void => {
    // given
    const component: HTMLElement = <ListItemComponent>document.createElement('list-item');

    // then
    document.body.appendChild(component);
    expect(component.id).toEqual('');

    // then
    component.id = '123';
    expect(component.id).toEqual('123');
    expect((component as ListItemComponent).isInvalid).toBe(false);
  });

  it('should set the component valid state', async (): Promise<void> => {
    // given
    const component: HTMLElement = <ListItemComponent>document.createElement('list-item');

    document.body.appendChild(component);
    (component as ListItemComponent).isInvalid = true;

    // then
    expect(component.getAttribute('invalid')).toEqual('true');

    // then
    (component as ListItemComponent).isInvalid = false;
    expect(component.getAttribute('invalid')).toBeFalsy();
  });

  it('executes a callback on delete button click', async (): Promise<void> => {
    // given
    const spyOnClickDelete = jest.fn();
    const component: HTMLElement = <ListItemComponent>document.createElement('list-item');

    document.body.appendChild(component);
    component.id = '123';
    (component as ListItemComponent).onClickDelete = spyOnClickDelete;

    // then
    await waitFor((): void => {
      const button: HTMLButtonElement | null | undefined = component.shadowRoot?.querySelector('button');

      fireEvent.click(button as HTMLButtonElement);
      expect(spyOnClickDelete).toHaveBeenCalledWith('123');
    });
  });

  it('does not execute a callback when none is passed in', async (): Promise<void> => {
    // given
    const spyOnClickDelete = jest.fn();
    const component: HTMLElement = <ListItemComponent>document.createElement('list-item');

    document.body.appendChild(component);

    // then
    await waitFor((): void => {
      const button: HTMLButtonElement | null | undefined = component.shadowRoot?.querySelector('button');

      fireEvent.click(button as HTMLButtonElement);
      expect(spyOnClickDelete).not.toHaveBeenCalled();
    });
  });
});
