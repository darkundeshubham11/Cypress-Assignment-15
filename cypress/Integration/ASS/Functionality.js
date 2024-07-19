///<reference types="cypress"/>
describe('Books to Scrape - Non Fiction Link Click Functionality', () => {
    it('should navigate to Non-Fiction category page', () => {
        cy.visit('https://books.toscrape.com/');
        cy.wait(2000);
        cy.xpath('//ul[@class="nav nav-list"]').contains('Non-Fiction').click({ force: true });
        cy.url().should('include', 'category/books/non-fiction_13/index.html');
        cy.get('h1').should('have.text', 'Non-Fiction');
    });
});
