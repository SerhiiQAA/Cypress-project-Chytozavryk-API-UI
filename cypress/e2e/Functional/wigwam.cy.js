import Wigwam from "../Pages/Wigwam.js";

describe('Wigwam', () => {
    it('Вхід в Читозаврика', () => {
        cy.visit('/')

        // cy.injectAxe();
        // cy.checkA11y();
        
        const Wigwam_ = new Wigwam();

        Wigwam_.validateCookies()
        Wigwam_.validateSingInUser2()
        Wigwam_. validateParentsPage()
        Wigwam_.validateWigwamPage()
    })
})