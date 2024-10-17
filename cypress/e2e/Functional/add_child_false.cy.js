import Child from "../Pages/Child.js";

describe('Add child false', () => {
        it('Add child', () => {
                cy.visit('/')

                // cy.injectAxe();
                // cy.checkA11y();
                
                const AddFalse = new Child();

                AddFalse.validateCookies();
                AddFalse.validateSingInUser1();
                AddFalse.validateAddChildFalseResult();
        });
})
