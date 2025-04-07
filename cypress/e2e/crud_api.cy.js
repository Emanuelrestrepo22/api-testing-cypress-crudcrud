import * as helpers from '../support/helpers';
import user from '../fixtures/user.json';

describe('🧪 TS01 - API Testing - Modularizado con helpers', () => {
  let userId;

  it(' TS01-TC01. Crear un nuevo usuario', () => {
    helpers.createUser(user.initial).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property('_id');
      userId = res.body._id;
      cy.log('User ID:', userId);
    });
  });

  it('TS01-TC02. Validar que el usuario fue creado', () => {
    helpers.createUser(user.initial).then((res) => {
      userId = res.body._id;
      cy.log('Usuario creado con ID:', userId);

      helpers.getUser(userId).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('name', user.initial.name);
        expect(res.body).to.have.property('job', user.initial.job);
      });
    });
  });
});
