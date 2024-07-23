describe('Registration', () => {
    it('Registration',() => {
        cy.visit('/')

        // cy.injectAxe();
        // cy.checkA11y();

        cy.get('.styles_cookies__B0VbB > .Button_button__aem_D').click()
        cy.get('.Header_buttonIn__UbNpa').click()
//modal_log_in/registration
        cy.get('.Auth_link__9JNOS').click()
        cy.get('.Auth_dialog__U_lV4').should('be.visible')
        cy.url().should('include', 'signup')
        cy.wait(5)
//create data
        const rnd = Math.round(Math.random() * 8999) + 1000;
        const password1 = '1weQq#we%' + rnd;
        const username = 'user_' + rnd;
        const email1 = username + '@gmail.com';
//data input
        cy.get('.Auth_inputs-group__bNUCL > div:nth-child(1) > label:nth-child(1) > span:nth-child(2) > input:nth-child(1)').clear().type(email1)
        cy.get('[name="password"]').clear().type(password1)
        cy.get('[name="password2"]').clear().type(password1)
        cy.get('.Auth_checkboxes-groups-signup__QkH2_ > div:nth-child(2) > label:nth-child(1) > span:nth-child(1)').click()
        // cy.wait(1000)
//registration
        cy.get('.Auth_button-submit__R2m5P').click()
        // cy.wait(1000)
        cy.get('.Auth_title__W4I96').should('have.text','Ви успішно зареєструвалися')
        cy.get('.Auth_button-submit__R2m5P').click()
        cy.url().should('include', 'parents')
    })
})