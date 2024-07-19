///<reference types="cypress"/>
describe('Books to Scrape - Verify Page Title', () => {
    it('page title', () => {
        cy.visit('https://books.toscrape.com/');
        cy.title().should('eq', 'All products | Books to Scrape - Sandbox');
    });
});
