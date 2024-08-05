describe('Free', () => {
    it('should be publicly accessible', () => {
        cy.visit('/');
        // cy.clearAllCookies();
        cy.get('.styles_button__t3hAn').click()
        cy.wait(500)
        cy.matchImageSnapshot();
    });
});