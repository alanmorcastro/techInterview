export const BASE_URL = 'https://www.saucedemo.com/';

export const VALID_CREDENTIALS = {
  username: 'standard_user',
  password: 'secret_sauce'
};

export const CHECKOUT_INFORMATION = {
  firstName: 'John',
  lastName: 'Doe',
  postalCode: '12345'
}

export const apiEndpoints = {
  auth: 'https://restful-booker.herokuapp.com/auth',
  booking: 'https://restful-booker.herokuapp.com/booking'
}

export const apiParams = {
  bookingId: 1,
  firstname: 'Sally',
  updatedFirstname: 'John',
  patchFirstname: 'Jane',
  lastname: 'Brown',
  updatedLastname: 'Doe',
  patchLastname: 'Smith',
  price: 25,
  checkin: '2026-01-01',
  checkout: '2026-01-10',
  additionalneeds: 'Breakfast'
}

export const USERAGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1';

export const userType = {
  guest: 'guest',
  member: 'member',
}