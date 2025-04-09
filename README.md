# 🧪 API Testing Challenge with Cypress - Megatlón Sistemas

This repository contains the solution to the technical challenge for automating RESTful API testing using **Cypress** and **Postman**, leveraging the free API from [crudcrud.com](https://crudcrud.com/).

---

## 🚀 Project Objective

Automate tests for the HTTP methods `GET`, `POST`, `PUT`, and `DELETE` on the user endpoint, validating the following:

- Create a new user
- Validate user creation
- Update user information
- Delete the user
- Confirm that the user no longer exists

---

## 🧰 Technologies Used

- [Cypress](https://www.cypress.io/)
- [Postman](https://www.postman.com/)
- JavaScript
- JSON

---

## 📂 Project Structure

```bash
api-testing-cypress-crudcrud/
├── cypress/
│   ├── e2e/
│   │   └── api_spec.cy.js                  # Suite principal de pruebas
│   ├── fixtures/
│   │   └── user.json                       # Datos reutilizables para los tests
│   └── support/
│       └── commands.js                     # Espacio reservado para comandos custom
│       └── helpers.js                      # Lógica de interacción con la API
├── postman/
│   └── postman_collection_crudcrud.json    # Colección exportada desde Postman
├── .env                                    # 🔐 Archivo con la API Key (no versionado)
├── cypress.config.js                       # Configuración global de Cypress
├── package.json                            # Dependencias y scripts del proyecto
├── README.md                               # Este documento
└── .gitignore                              # Ignora archivos sensibles y temporales


🔧 Setup & Execution
git clone https://github.com/your-username/api-testing-cypress-crudcrud.git
cd api-testing-cypress-crudcrud

2. Install dependencies
npm install

3. Crear el archivo .env con tu API Key
Antes de ejecutar las pruebas, necesitás crear un archivo .env en la raíz del proyecto con tu clave de API de CrudCrud:

3.1. 🔑 Obtener tu API Key:
Ir a: https://crudcrud.com/

3.2. Se te generará una URL única como:
https://crudcrud.com/api/0f1f2c2ca903415d87d7cfb6e77d0c3c

3.3. Copiá solo la última parte (el hash):
ejemplo de secret: 0f1f2c2ca903415d87d7cfb6e77d0c3c

📄 Crear .env con:
API_KEY=0f1f2c2ca903415d87d7cfb6e77d0c3c
⚠️ Este archivo está incluido en .gitignore por seguridad.


4. Run Cypress
npx cypress open



**🧪 Casos de prueba incluidos
Test ID	Descripción	Método
TS01-TC01	Crear usuario (POST /users)	POST
TS01-TC02	Validar creación (GET /users/:id)	GET
TS01-TC03	Actualizar usuario (PUT /users/:id)	PUT
TS01-TC04	Eliminar usuario (DELETE /users/:id)	DELETE
TS01-TC05	Confirmar eliminación (GET /users/:id → 404)	GET**
