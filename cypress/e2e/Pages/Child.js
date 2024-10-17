class Child {
    navigate() {
        cy.visit('/');
    }
    validateCookies() {
        cy.get('.styles_cookies__B0VbB > .Button_button__aem_D').click()
    }
    validateSingInUser1() {
        cy.get('.Header_buttonIn__UbNpa').click()
        cy.get('.Header_buttonIn__UbNpa').should('be.visible')
        cy.url().should('include', 'signin')
        cy.get('[type="email"]').clear().type('addchild@gmail.com')
        cy.get('[type="password"]').clear().type('Addchild!1')
        cy.get('[type="submit"]').click()
        cy.get('.Header_button__gdEXY').should('be.visible')
        cy.get('.Header_button__gdEXY').should('have.text', 'Кабінет')
        cy.get('.Header_button__gdEXY').click()
        cy.wait(500)
    }
    validateSingInUser2() {
        cy.get('.Header_buttonIn__UbNpa').click()
        cy.get('.Header_buttonIn__UbNpa').should('be.visible')
        cy.url().should('include', 'signin')
        cy.get('[type="email"]').clear().type('addchild!@gmail.com')
        cy.get('[type="password"]').clear().type('Addchild!1')
        cy.get('[type="submit"]').click()
        cy.wait(500)
        cy.get('.Header_button__gdEXY').should('be.visible')
        cy.get('.Header_button__gdEXY').should('have.text', 'Кабінет')
        cy.get('.Header_button__gdEXY').click()
        cy.wait(500)
        cy.get('.Parents_button__VJzVN').click()
    }
    validateAddChildTrue() {
        cy.get('.CreateWigwam_form__vQwMe').should('be.visible')
        const rnd = Math.round(Math.random() * 8999) + 1000;
        const namebaby = 'Baby' + rnd

        //input data
        cy.get('.NameInput_input__0e0tC').clear().type(namebaby)
        cy.get('[for="4"] > .AvatarFields_image__IAVWG').click()

        cy.get('.Buttons_buttonsWrapper__5qKRW > .Button_button--filled__Ghblc').click()

    }
    validateDeleteChild() {
        cy.get('.KidProfile_buttons__tc_jQ > :nth-child(2) > img').click()
        cy.get('.Modal_buttons__m0B3s > .Button_button--filled__Ghblc').click()
        cy.get('.KidList_text__1K6V5').should('have.text', 'У вас поки немає створеного вігваму')
    }
    validateAddChildFalseResult() {
        cy.get('.KidProfile_item__v0lY6').should('have.length', 6)
        cy.get('.Parents_button__VJzVN').click()
        cy.get('.Notification_container__Vv3TE').should('be.visible')
        cy.get('.Notification_container__Vv3TE').should('have.text', 'Вибачте, ви вже створили максимально дозволену кількість вігвамів')
        cy.get('.lucide').click()
    }
}
export default Child;