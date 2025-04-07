require('dotenv').config(); // carga las variables desde .env

module.exports = {
  e2e: {
    baseUrl: `https://crudcrud.com/api/${process.env.API_KEY}`,
    env: {
      apiKey: process.env.API_KEY
    },
    setupNodeEvents(on, config) {
      return config;
    }
  }
};
