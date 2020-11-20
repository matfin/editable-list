const template = document.createElement('template');

template.innerHTML = `
  <style type="text/css">
    div {
      display: block;
      max-height: 6rem;
      padding: 0.5rem;
      border: 1px solid rgb(195, 194, 207);
      border-radius: 0.25rem;
      background: #fff;
      overflow-y: scroll;
    }
    item-input {
      display: inline-block;
    }
  </style>
  <div>
    <items-list>
      <item-input type="text" slot="input" placeholder="add more people" />
    </items-list>
  </div>
`;

export default template;
