import { waitFor } from '@testing-library/dom';
import fireEvent from '@testing-library/user-event';
import ItemInputComponent from '.';

describe('<item-input>', (): void => {
  afterEach((): void => {
    document.body.removeChild(document.body.firstChild as HTMLElement);
  });

  it('renders the component with a placeholder and value', async (): Promise<void> => {
    // given
    const component: HTMLElement = <ItemInputComponent>document.createElement('item-input');

    // when
    document.body.appendChild(component);
    (component as ItemInputComponent).placeHolder = 'Test placeholder';
    (component as ItemInputComponent).value = 'Test value';

    await waitFor((): void => {
      const input: HTMLInputElement = component.shadowRoot?.querySelector('input') as HTMLInputElement;

      expect(input.getAttribute('placeholder')).toEqual('Test placeholder');
      expect(input.value).toEqual('Test value');
    });
  });

  it('executes the correct callbacks for input events', async (): Promise<void> => {
    const spyOnBlur = jest.fn();
    const spyOnInput = jest.fn();
    const spyOnKeydown = jest.fn();
    const component: HTMLElement = <ItemInputComponent>document.createElement('item-input');

    // given
    document.body.appendChild(component);
    (component as ItemInputComponent).onBlur = spyOnBlur;
    (component as ItemInputComponent).onInput = spyOnInput;
    (component as ItemInputComponent).onKeydown = spyOnKeydown;

    await waitFor((): void => {
      const input: HTMLInputElement = component.shadowRoot?.querySelector('input') as HTMLInputElement;

      // when
      fireEvent.type(input, 'Test');
      input.blur();

      // then
      expect(spyOnBlur).toHaveBeenCalled();
      expect(spyOnInput).toHaveBeenCalled();
      expect(spyOnKeydown).toHaveBeenCalled();
    });
  });

  it('does not execute any callbacks when none are passed in', async (): Promise<void> => {
    const spyOnBlur = jest.fn();
    const spyOnInput = jest.fn();
    const spyOnKeydown = jest.fn();
    const component: HTMLElement = <ItemInputComponent>document.createElement('item-input');

    // given
    document.body.appendChild(component);

    await waitFor((): void => {
      const input: HTMLInputElement = component.shadowRoot?.querySelector('input') as HTMLInputElement;

      // when
      fireEvent.type(input, 'Test');
      input.blur();

      // then
      expect(spyOnBlur).not.toHaveBeenCalled();
      expect(spyOnInput).not.toHaveBeenCalled();
      expect(spyOnKeydown).not.toHaveBeenCalled();
    });
  });
});
