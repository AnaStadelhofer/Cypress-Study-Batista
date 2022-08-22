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

Cypress.Commands.add('PageForms', function() {
    cy.get('.bold').contains('Formulário').click()
    cy.get('.bold').contains('Criar Usuários').click()
    cy.get('.center').contains('Novo Usuário!!')
})

Cypress.Commands.add('FillUserFields', function(name_user, last_name, email) {
    cy.get('#user_name').type(name_user)
    cy.get('#user_lastname').type(last_name)
    cy.get('#user_email').type(email)
})