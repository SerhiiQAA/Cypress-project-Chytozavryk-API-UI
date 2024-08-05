describe('Footer', () => {
    it('should be publicly accessible', () => {
        cy.visit('/');
        // cy.clearAllCookies();
        cy.get('.styles_button__t3hAn').click()
        
        cy.get('.Donate_button__PMzEe').scrollIntoView().should('be.visible')
        cy.wait(2000)
        cy.get('.Donate_button__PMzEe').matchImageSnapshot();
    });
});