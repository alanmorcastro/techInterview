import { apiEndpoints } from "../../utils/constants";
import { expect, test } from "../../utils/fixture";

let authToken = null;
let bookingId = null;

test('should create an auth token', async ({ request }) => {
  const response = await request.post(apiEndpoints.auth, {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  authToken = (await response.json()).token;
  expect(authToken).toBeTruthy();
})

test('should create booking', async ({ request }) => {
  const response = await request.get(apiEndpoints.booking, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 25,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-01-01',
        checkout: '2024-01-10'
      },
      additionalneeds: 'none'
    }
  });
});
