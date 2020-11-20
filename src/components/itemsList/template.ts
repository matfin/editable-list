const template = document.createElement('template');

template.innerHTML = `
  <style type="text/css">
    ul {
      padding: 0;
      margin: 0;
    }
    list-item {
      display: inline-block;
      margin-right: 0.5rem;
      margin-bottom: 0.25rem;
    }
  </style>
  <ul list>
    <slot name="input">
    </slot>
  </ul>
`;

export default template;
