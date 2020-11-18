const button = `
  button {
    background: none;
    border: none;
    flex: 0 0 0.75rem;
    height: 1.5rem;
    padding: 0;
  }
`;

const li = `
  li {
    display: flex;
    height: 1.5rem;
    align-items: center;
    padding: 0 0.625rem;
    background: rgba(102, 153, 255, 0.2);
    border-radius: 0.75rem;
  }
`;

const span = `
  span {
    flex: 1;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;

const svg = `
  svg {
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export default [button, li, span, svg].join('');
