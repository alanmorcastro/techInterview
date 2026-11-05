import { apiEndpoints, apiParams } from "../../utils/constants";
import { expect, test } from "../../utils/fixture";

let authToken: string | null = null;
let bookingId: string | null = null;

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
  expect(response.status()).toBe(200);
  expect(authToken).toBeTruthy();
})

test('should get all booking ids', async ({ request }) => {
  const response = await request.get(apiEndpoints.booking, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  expect(response.status()).toBe(200);
  expect(await response.json()).toBeTruthy();
})

test('should get booking ids filtered by name', async ({ request }) => {
  const response = await request.get(apiEndpoints.booking, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      firstname: apiParams.firstname,
      lastname: apiParams.lastname
    }
  });
  expect(response.status()).toBe(200);
  expect(await response.json()).toBeTruthy();
})

test('should get booking by id', async ({ request }) => {
  const response = await request.get(apiEndpoints.booking, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      id: apiParams.bookingId
    }
  });
  expect(response.status()).toBe(200);
  expect(await response.json()).toBeTruthy();
})

test('should create booking', async ({ request }) => {
  const response = await request.post(apiEndpoints.booking, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      firstname: apiParams.updatedFirstname,
      lastname: apiParams.updatedLastname,
      totalprice: apiParams.price,
      depositpaid: true,
      bookingdates: {
        checkin: apiParams.checkin,
        checkout: apiParams.checkout
      },
      additionalneeds: apiParams.additionalneeds
    }
  })
  expect(response.status()).toBe(200);
  expect(await response.json()).toBeTruthy();
})

test('should update booking', async ({ request }) => {
  const response = await request.put(`${apiEndpoints.booking}/${apiParams.bookingId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': `token=${authToken}`
    },
    data: {
      firstname: apiParams.updatedFirstname,
      lastname: apiParams.updatedLastname,
      totalprice: apiParams.price,
      depositpaid: true,
      bookingdates: {
        checkin: apiParams.checkin,
        checkout: apiParams.checkout
      },
      additionalneeds: apiParams.additionalneeds
    }
  });
  expect(response.status()).toBe(200);
  expect(await response.json()).toBeTruthy();
})

test('should patch booking', async ({ request }) => {
  const response = await request.patch(`${apiEndpoints.booking}/${apiParams.bookingId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': `token=${authToken}`
    },
    data: {
      firstname: apiParams.patchFirstname,
      lastname: apiParams.patchLastname
    }
  });
  expect(response.status()).toBe(200);
  expect(await response.json()).toBeTruthy();
})

test('should delete booking', async ({ request }) => {
  const response = await request.delete(`${apiEndpoints.booking}/${apiParams.bookingId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': `token=${authToken}`
    }
  });
  expect(response.status()).toBe(201);
})