// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of null (reading 'addEventListener')")) {
      return false; // Prevent Cypress from failing the test
    }
    return true; // For other errors, let Cypress fail the test
  });

// cypress/support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
    // Here you can filter out specific exceptions or ignore them
    if (err.message.includes('bootstrap is not defined')) {
      // Returning false prevents Cypress from failing the test
      return false;
    }
    // Returning true means the test will fail on other exceptions
    return true;
  });
  