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

Cypress.Commands.add('openWebsite', (serviceType) => {
    switch (serviceType) {
        // United Kingdom market
        case 'United Kingdom':
            cy.visit('https://www.mercedes-benz.co.uk')
            break
        // New Zealand market
        case 'New Zealand':
            cy.visit('https://www.mercedes-benz.co.nz')
            break
        // Germany market
        case 'Germany':
            cy.visit('https://www.mercedes-benz.de')
            break
    }
    // To validate: WEBSITE is open correctly
    cy.get('iam-user-menu.webcomponent', { timeout: 4000 })
})