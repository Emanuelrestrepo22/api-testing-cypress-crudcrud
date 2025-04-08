import * as helpers from '../support/helpers';
import user from '../fixtures/user.json';

describe('🧪 TS01 - User API CRUD Operations', () => {
  let userId;

  it('TS01-TC01. Crear un nuevo usuario', () => {
    helpers.createUser(user.initial).then(({ status, body, headers, duration }) => {
      //Validaciones de respuesta
      expect(status).to.eq(201);
      expect(body).to.have.property('_id');
      expect(body.name).to.eq(user.initial.name);
      expect(body.job).to.eq(user.initial.job);

      //Validaciones adicionales
      expect(headers).to.have.property('content-type').and.include('application/json');
      expect(duration).to.be.lessThan(2000);

      //  Guardar ID para futuros casos si se requiere
      userId = body._id;

      cy.log(`Usuario creado con ID: ${userId}`);
    });
  });
  it('TS01-TC02. Validar que el usuario fue creado', () => {
    // Paso 1: Crear el usuario
    helpers.createUser(user.initial).then(({ body }) => {
      const userId = body._id;
      cy.log(`Usuario creado con ID: ${userId}`);
  
      // Paso 2: Obtener el usuario recién creado
      helpers.getUser(userId).then(({ status, body, headers, duration }) => {
        // Validaciones clave
        expect(status).to.eq(200);
        expect(body).to.have.property('_id', userId);
        expect(body.name).to.eq(user.initial.name);
        expect(body.job).to.eq(user.initial.job);
  
        //Validaciones adicionales
        expect(headers['content-type']).to.include('application/json');
        expect(duration).to.be.lessThan(1000);
  
        cy.log(`Validación exitosa del usuario con ID: ${userId}`);
      });
    });
  });

  it('TS01-TC03. Actualizar los datos del usuario', () => {
    // Paso 1: Crear usuario original
    helpers.createUser(user.initial).then(({ body }) => {
      const userId = body._id;
      cy.log(`Usuario creado con ID: ${userId}`);
  
      // Paso 2: Actualizar el usuario con nuevos datos
      helpers.updateUser(userId, user.updated).then(({ status }) => {
        //Validación de respuesta del PUT
        expect(status).to.eq(200);
  
        // Paso 3: Validar que los datos fueron actualizados con un GET
        helpers.getUser(userId).then(({ status, body, headers, duration }) => {
          //Validaciones clave
          expect(status).to.eq(200);
          expect(body.name).to.eq(user.updated.name);
          expect(body.job).to.eq(user.updated.job);
  
          //Validaciones adicionales
          expect(headers['content-type']).to.include('application/json');
          expect(duration).to.be.lessThan(1000);
  
          cy.log(`Usuario actualizado correctamente con ID: ${userId}`);
        });
      });
    });
  });
  
  it('TS01-TC04. Eliminar el usuario', () => {
    // Paso 1: Crear un nuevo usuario
    helpers.createUser(user.initial).then(({ body }) => {
      const userId = body._id;
      cy.log(`Usuario creado con ID: ${userId}`);
  
      // Paso 2: Eliminar el usuario por ID
      helpers.deleteUser(userId).then(({ status, duration }) => {
        // ✅ Validaciones
        expect(status).to.eq(200);
        expect(duration).to.be.lessThan(1000);
  
        cy.log(`Usuario eliminado correctamente con ID: ${userId}`);
      });
    });
  });
  
  it('TS01-TC05. Confirmar que el usuario fue eliminado (GET → 404)', () => {
    // Paso 1: Crear usuario
    helpers.createUser(user.initial).then(({ body }) => {
      const userId = body._id;
      cy.log(`Usuario creado con ID: ${userId}`);
  
      // Paso 2: Eliminar usuario
      helpers.deleteUser(userId).then(({ status, duration }) => {
        expect(status).to.eq(200);
        expect(duration).to.be.lessThan(1000);
        cy.log(`Usuario eliminado: ${userId}`);
  
        // Paso 3: Intentar obtener el usuario eliminado (esperamos 404)
        helpers.getDeletedUser(userId).then(({ status, body, headers, duration }) => {
          // Validaciones principales
          expect(status).to.eq(404);
          expect(duration).to.be.lessThan(1500);
          expect(headers['content-type']).to.match(/application\/(problem\+)?json/);
  
          //Validación exacta del body (basado en Postman)
          expect(body).to.have.all.keys('type', 'title', 'status', 'traceId');
          expect(body.status).to.eq(404);
          expect(body.title.toLowerCase()).to.include('not found');
          expect(body.type).to.include('rfc7231#section-6.5.4');
          expect(body.traceId).to.be.a('string');
  
          cy.log(`Confirmación de eliminación: el usuario con ID ${userId} no existe.`);
        });
      });
    });
  });
  
});