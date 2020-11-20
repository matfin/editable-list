export const generateRandomId = (): string =>
  crypto.getRandomValues(new Uint32Array(1))[0].toString(16);

export const splitMultipleInputs = (input: string): string[] =>
  input
    .split(',')
    .filter((item: string): boolean => item.length > 0)
    .map((item: string): string => item.trim());
