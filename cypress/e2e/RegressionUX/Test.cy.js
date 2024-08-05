describe('Footer', () => {
    it('should be publicly accessible', () => {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
        cy.wait(500)
        // cy.pause()
    
        // cy.clearAllCookies();
        cy.matchImageSnapshot({
            blackout: ['.origin-top viewport']
          });
        });
});