import Child from "../Pages/Child.js";

describe('Add/delete child profile', () => {
        it('Add/delete child profile', () => {
                cy.visit('/')

                // cy.injectAxe();
                // cy.checkA11y();
                const AddDeleteChild = new Child();

                AddDeleteChild.validateCookies()
                AddDeleteChild.validateSingInUser2()
                AddDeleteChild.validateAddChildTrue()
                AddDeleteChild.validateDeleteChild()
        })
})