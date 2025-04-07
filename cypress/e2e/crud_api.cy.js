import * as helpers from '../support/helpers';
import user from '../fixtures/user.json';

describe('🧪 API Testing - Modularizado con helpers', () => {
  let userId;

  it('🔹 Crear un nuevo usuario', () => {
    helpers.createUser(user.initial).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property('_id');
      userId = res.body._id;
      cy.log('User ID:', userId);
    });
  });

  // Podrás agregar más tests aquí usando el mismo userId y helpers.
});
