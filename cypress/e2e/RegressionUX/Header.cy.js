describe('Header', () => {
    it('should be publicly accessible', () => {
        cy.visit('/');
        cy.wait(500)
        // cy.clearAllCookies();
        cy.get('.styles_button__t3hAn').click()
        // cy.wait(2000)
        cy.get('header').should('be.visible')
        cy.get('header').matchImageSnapshot();
    });
});