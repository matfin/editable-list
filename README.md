### Editable list
This is an experimental projects to leverage [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to create a project that solves a common challenge that front end engineers would encounter quite frequently.

Web Components are a standardised suite of technologies that span the spectrum of CSS, JavaScript (ECMAScript) and HTML, and when built, can be used as any standard HTML component.

In this case, a custom Web Component has been written that allows a user to add and remove items from a list with an `<editable-list>` component. The aim was to make this as simple as possible to integrate into any web project and be framework agnostic.

Apart from testing, development and build, this project uses no external dependencies in its run time. Everything is part of the WebAPI. This project covers concepts such as scoped styles, shadow dom, custom HTML templates and class based components.

#### How this is structured
This project contains four main Web Components and each of them are designed to work together to solve the challenge, while maintaining good separation of concerns. These components are as follows:

- The `<list-item>` component contains the styling, structure and behaviour for individual list items. This component styles itself if the content is not valid and it has a delete button callback that is executed in its parent container.
- The `<items-list>` component handles the logic for rendering, adding and removing items from the list. It contains a `slot` element so we can add an input inline alongside the list items.
- The `<item-input>` component is a text field that focuses on adding event listeners. It handles callbacks passed in for when the text field is changed, focused, blurred or when a key press event occurs. This helps with adding an item to the list when the user presses enter, types in a comma or blurs on the input field.
- Finally, the `<editable-list>` component ties the previous two together and is the main component that is imported into a document the end-user is authoring.

#### Other info
- This project is written in TypeScript and transpiled into a flavour of ECMAScipt the browser can interpret. For this, [Babel](https://babeljs.io/) and [webpack](https://webpack.js.org/) are used.
- [Jest](https://jestjs.io/) is used as the test runner and DOM testing is carried out using the [DOM testing library](https://testing-library.com/docs/dom-testing-library/intro/).
- [ESLint](https://eslint.org/) is used for code quality checking.
- This package takes care of [registering custom web components](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) so the end-user doesn't need to do this.
- This project has full test coverage.

#### How do I run this?
- Ensure you have the latest version of [Node](https://nodejs.org/en/) installed. The LTS version is recommended.
- You will also need the latest version of the [Yarn package manager](https://yarnpkg.com/) to build and test this.
- Once you have the above requirements, execute the following commands:
  - `yarn dev` will build this into a single file to `dist/editable-list.js` which can then be used inside the example file (`/dist/example.html`). Open this file directly in your browser.
	- `yarn test` will run all tests and `yarn coverage` will run all tests with coverage checks.
	- `yarn lint` will run code lint checks using ESLint
	- `yarn checks` will run test coverage and lint checks
	- `yarn build` will build a compressed production build and output a file to `/dist` called `editable-list.js`.

#### As a developer, how can I use this in my project?
This library is framework agnostic and does not use any third party utilites or plugins. It can be used in any framework, be it VueJS, React, Angular or just plain HTML.

An extensive example of how to use it can be seen in the file `/dist/example.html`. The steps for using this are as follows:

**Note:** This project will run in recent versions of all major evergreen browsers. It will not run in Internet Explorer or the older versions of Microsoft Edge that use the EdgeHTML rendering engine.

1: You need to include the script for the component in your HTML document as follows in this pared down example:

```
<!DOCTYPE html>
<html>
	<head>
		<title>
			Editable list
		</title>
	</head>
	<body>
		<editable-list id="list"></editable-list>
		<script src="editable-list.js">
	</body>
</html>
```

2: The `<editable-list>` component can be included a number of times in any document and has the following features for functionality.

```
() => {
	const list = document.querySelector('#list');

	// to add an item to the list (programatically)
	list.addItemToList('An item');

	// to get a list of items in the list
	const items = list.items;

	// set an optional validation function with string argument that returns a boolean
	list.validationFunction = item => item.length > 0;
};
```

3: Usability
- Typing into the component input and pressing either the Enter key or adding a comma will terminate the input and add the content to the list.
- Pasting in comma separated values will add all items to the list in bulk. Any empty values will be discarded
- Blurring on the input field will add the content to the list.
- Empty content will not be added to the list.
- Clicking on the delete icon 'x' on a list item will remove it from the list.

#### Challenges encountered
- Getting the test set up working was quite tricky. The testing library used is quite useful, but has limited support for custom Web Components. Setting up Jest to use `jest-environment-jsdom-sixteen` made support for these possible.
- This is a first run at creating a series of custom Web Component to solve a problem. Good separation of concerns has been maintained, but other things like style overrides needs to be taken into considering. This will be built-in in the future by leveraging CSS4 custom variables.