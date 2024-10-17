import AdminPanel from "../Pages/AdminPanel.js";

describe('Admin panel', () => {
    it('Admin panel',() => {
        //  cy.viewport(1620, 1080)
         cy.login_admin()

        //  cy.injectAxe();
        // cy.checkA11y();
        const Admin = new AdminPanel();

        Admin.validateAdminBtn()
        Admin.validateUserPage()
        Admin.validateBooksPage()
        Admin.validateQuizesPage()
        Admin.validateDocumentaitionPage()
        Admin.validatePartnersPage()
        Admin.validateContactsPage()
        Admin.validateStatisticPage()
        Admin.validatePasswordPage()
        Admin.validateAdminLogOut()
    })
})