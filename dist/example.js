/**
 * One of these will be selected randomly
 */
window.emails = [
  'one@test.ie',
  'two@test.ie',
  'three@test.ie',
  'four@test.ie',
  'five@test.ie',
  'six@test.ie',
  'seven@test.ie',
];

/**
 * These too
 */
window.urls = [
  'https://one.ie',
  'https://two.ie',
  'https://three.ie',
  'https://four.ie',
  'https://five.ie',
  'https://six.ie',
  'https://seven.ie',
];

/**
 * To be used to fetch a random url/email from the list above
 */
const randomNumberInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Setting up the emails list container which will
 * 1) Validate inputs to ensure they are valid email addresses
 * 2) Alert the number of items in the list
 * 3) Add a random email address to the list
 */
const setupEmailsList = () => {
  const editableEmails = document.querySelector('#emails');
  const addEmailButton = document.querySelector(
    '#emails-container button.add-email'
  );
  const getEmailCountButton = document.querySelector(
    '#emails-container button.get-email-count'
  );
  /**
   * Validation function passed in to ensure the input
   * is a valid email address
   */
  const isValidEmail = (email) => {
    const re = RegExp(/(.+)@(.+){2,}\.(.+){2,}/);

    return re.test(email ?? '');
  };

  /**
   * Validation function passed in to ensure the input
   * is a valid email address
   */
  editableEmails.validationFunction = isValidEmail;

  getEmailCountButton.addEventListener('click', () =>
    alert(editableEmails.items.length)
  );

  addEmailButton.addEventListener('click', () =>
    editableEmails.addItemToList(
      window.emails[randomNumberInRange(0, window.emails.length)]
    )
  );
};

/**
 * Setting up the urls list container which will
 * 1) Validate inputs to ensure they are valid urls
 * 2) Alert the number of items in the list
 * 3) Add a random url to the list
 */
const setupUrlsList = () => {
  const editableUrls = document.querySelector('#urls');
  const addUrlButton = document.querySelector('#urls-container button.add-url');
  const getUrlCountButton = document.querySelector(
    '#urls-container button.get-url-count'
  );
  /**
   * Validation function passed in to ensure the input
   * is a valid email url
   */
  const isValidUrl = (url) => {
    const re = RegExp(
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
    );

    return re.test(url ?? '');
  };

  /**
   * Attach the validation function
   */
  editableUrls.validationFunction = isValidUrl;

  getUrlCountButton.addEventListener('click', () =>
    alert(editableUrls.items.length)
  );

  addUrlButton.addEventListener('click', () =>
    editableUrls.addItemToList(
      window.urls[randomNumberInRange(0, window.urls.length)]
    )
  );
};

window.addEventListener('load', () => {
  setupEmailsList();
  setupUrlsList();
});
