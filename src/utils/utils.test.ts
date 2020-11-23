import { generateRandomId, splitMultipleInputs } from '.';

describe('utils', (): void => {
  it('should generate a random id', (): void => {
    (window.crypto.getRandomValues as jest.Mock).mockReturnValue('abc123');

    expect(generateRandomId()).toEqual('a');
  });

  it('should split multiple inputs', (): void => {
    expect(splitMultipleInputs('test')).toEqual(['test']);
    expect(splitMultipleInputs('test, test')).toEqual(['test', 'test']);
    expect(splitMultipleInputs('test, test,,,')).toEqual(['test', 'test']);
  });
});
