describe('Add child false', () => {
    it('Add child',() => {
        cy.visit('/')

        // cy.injectAxe();
        // cy.checkA11y();

        cy.get('.styles_cookies__B0VbB > .Button_button__aem_D').click()

// modal_log_in/registration
        cy.get('.Header_buttonIn__UbNpa').click()
        cy.get('.Header_buttonIn__UbNpa').should('be.visible')
        cy.url().should('include', 'signin')
        // cy.get('.AuthLink_link__fp59u Auth_forgot__9oWHO').should('have.text', 'Забули пароль?')
        cy.get('[type="email"]').clear().type('addchild!@gmail.com')
        cy.get('[type="password"]').clear().type('Addchild!1')
        cy.get('[type="submit"]').click()
        // cy.wait(1000)
// log_in
        cy.get('.Header_button__gdEXY').should('be.visible')
        // cy.get('.Header_button__TGutH').should('be.visible')
        cy.get('.Header_button__gdEXY').should('have.text', 'Кабінет')
        cy.get('.Header_button__gdEXY').click()
        cy.wait(500)
// add child
        cy.get('.Parents_button__VJzVN').click()
        // cy.wait(5000)
        cy.get('.Notification_container__Vv3TE').should('be.visible')
        cy.get('.Notification_container__Vv3TE').should('have.text', 'Вибачте, ви вже створили максимально дозволену кількість вігвамів')
        cy.get('.lucide').click()
        
    })
})