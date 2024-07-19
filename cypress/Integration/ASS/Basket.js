///<reference types="cypress"/>
describe('Books to Scrape - Add to Basket', () => {
    it('basket', () => {
        cy.visit('https://books.toscrape.com/');
        cy.get('.product_pod').first().click();
        cy.get('button').contains('Add to basket').click();
        cy.wait(2000);
        cy.get('.alert').should('contain', 'has been added to your basket');
    });
});
