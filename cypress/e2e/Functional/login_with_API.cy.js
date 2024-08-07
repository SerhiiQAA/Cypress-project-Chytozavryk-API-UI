describe('login_admin', () => {
    beforeEach(() => {
        // cy.task('clearUsers')
    })

    // it('logIn_logOut', () => {
    //     cy.visit('/')
    //     cy.get('.styles_button__t3hAn').click()
    //     cy.get('.Header_buttonIn__UbNpa').click()

    //     const email = 'info@chytozavryk.top'
    //     const password = 'Adm1n123$'

    //     cy.request({
    //         method: 'POST',
    //         url: '/?auth=signin',
    //         form: true,
    //         body: {
    //             email,
    //             password,
    //         }
    //     })
    //     .then((respons.status).to.eq(200))
    //     expect.body.
    //     // cy.visit('/')
    //     //  cy.get('a.Button_button__aem_D:nth-child(1)').should('have.text', 'Адміністрування')
    // })



it('logIn_logOut2', () => {
    cy.visit('https://info@chytozavryk.top:Adm1n123$@chytozavryk.top/api')
    cy.get('.styles_button__t3hAn').click()
    
    })
})