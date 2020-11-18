const button = `
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
`;

const li = `
  li {
    display: flex;
    height: 1.5rem;
    align-items: center;
    padding: 0 0.625rem;
    padding-right: 0;
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
  }
`;

export default [button, li, span, svg].join('');
