// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js App');
    // cy.get('#nav').find('a')[0].click();
    cy.get('.about').click();
    // cy.contains('This is an about page')
  });
});
