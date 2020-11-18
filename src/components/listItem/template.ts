import style from './style';

const template = document.createElement('template');

template.innerHTML = `
  <style type="text/css">
    ${style}
  </style>
  <li>
    <span title></span>
    <button delete>
    <svg
      width="8"
      height="8"
      view-box="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z"
        fill="#050038"
      />
    </svg>
    </button>
  </li>
`;

export default template;