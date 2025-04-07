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
│   │   └── api_spec.cy.js
│   ├── fixtures/
│   │   └── user.json
│   └── support/
│       └── commands.js
├── postman/
│   └── postman_collection_crudcrud.json
├── cypress.config.js
├── package.json
├── README.md
└── .gitignore

🔧 Setup & Execution
git clone https://github.com/your-username/api-testing-cypress-crudcrud.git
cd api-testing-cypress-crudcrud

2. Install dependencies
npm install

3. Run Cypress
npx cypress open
