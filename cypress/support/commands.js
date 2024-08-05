Cypress.Commands.add('login_admin', (email, password) => {
    cy.visit('/')
    cy.get('.styles_cookies__B0VbB > .Button_button__aem_D').click()
    cy.get('.Header_buttonIn__UbNpa').click()
    cy.wait(500)
    cy.get('.Auth_inputs-group__bNUCL > div:nth-child(1) > label:nth-child(1) > span:nth-child(2) > input:nth-child(1)').clear().type('info@chytozavryk.top')
    cy.get('.Auth_inputs-group__bNUCL > div:nth-child(2) > div:nth-child(1) > label:nth-child(1) > span:nth-child(2) > input:nth-child(1)').clear().type('Adm1n123$')
    // cy.wait(500)
    cy.get('.Auth_button-submit__R2m5P').click()
    // cy.wait(2000)
})




