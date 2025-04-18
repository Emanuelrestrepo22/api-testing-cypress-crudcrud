const apiKey = Cypress.env("apiKey");
const baseUrl = `https://crudcrud.com/api/${apiKey}/users`;

export const createUser = (userData) => {
  return cy.request('POST', baseUrl, userData);
};

export const getUser = (userId) => {
  return cy.request('GET', `${baseUrl}/${userId}`);
};

export const updateUser = (userId, userData) => {
  return cy.request('PUT', `${baseUrl}/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return cy.request('DELETE', `${baseUrl}/${userId}`);
};

export const getDeletedUser = (userId) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${userId}`,
    failOnStatusCode: false
  });
};

export const validateUserSchema = (body, expectedUser) => {
  expect(body).to.have.all.keys('_id', 'name', 'job');
  expect(body.name).to.eq(expectedUser.name);
  expect(body.job).to.eq(expectedUser.job);
};