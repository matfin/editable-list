const template = document.createElement('template');

template.innerHTML = `
  <style type="text/css">
    input {
      padding: 0 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5rem;
      border: 0;
    }

    input::placeholder {
      color: rgb(195, 194, 207);
    }

    input:focus {
      outline: none;
    }
  </style>
  <input />
`;

export default template;
