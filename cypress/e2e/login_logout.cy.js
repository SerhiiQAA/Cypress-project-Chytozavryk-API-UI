describe('Login/logout', () => {
    it('Login/logout',() => {
// log in
        cy.login('addchild@gmail.com', 'Addchild!1')
        cy.get('a.Button_button__aem_D:nth-child(1)').should('have.text', 'Адміністрування')
// log_out
        cy.get('.Header_button__gdEXY').click()
        cy.get('.Header_buttonOut__JL8B0').click()
        cy.get('.Header_buttonIn__UbNpa').should('have.text', 'Вхід')
    })
})