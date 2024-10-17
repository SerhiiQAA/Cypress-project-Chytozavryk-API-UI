class AdminPanel {
    navigate() {
        cy.visit('/');
    }
    validateAdminBtn() {
        cy.get('a.Button_button__aem_D:nth-child(1)').should('have.text', 'Адміністрування')
    }
    validateUserPage() {
        cy.get('a.Button_button__aem_D:nth-child(1)').click()
        cy.url().should('include', 'admin')
        cy.get('.Header_header__heading__swEfQ').should('have.text', 'Користувачі')
    }
    validateBooksPage() {
        cy.get('.NavBar_navigation__Cc7wX > :nth-child(2)').click()
        cy.url().should('include', 'admin/books')
        cy.get('.Header_header__heading__swEfQ').should('have.text', 'Книги')
    }
    validateQuizesPage() {
        cy.get('.lucide-chevron-down').click()
        cy.get('.NavBar_navigation__Cc7wX > :nth-child(3)').click()
        cy.url().should('include', 'admin/quizzes')
        cy.get('.Header_header__heading__swEfQ').should('have.text', 'Вікторини')
    }
    validateDocumentaitionPage() {
        cy.get('[href="/admin/documents"]').click()
        cy.url().should('include', 'admin/documents')
        cy.get('.Header_header__heading__swEfQ').should('have.text', 'Документи')
    }
    validatePartnersPage() {
        cy.get('[href="/admin/partners"]').click()
        cy.url().should('include', 'admin/partners')
        cy.get('.Header_header__heading__swEfQ').should('have.text', 'Партнери')
    }
    validateContactsPage() {
        cy.get('[href="/admin/contacts"]').click()
        cy.url().should('include', 'admin/contacts')
        cy.get('.Header_header__heading__swEfQ').should('have.text', 'Контакти')
    }
    validateStatisticPage() {
        cy.get('[href="/admin/statistics"]').click()
        cy.url().should('include', 'admin/statistics')
        cy.get('.Header_header__heading__swEfQ').should('have.text', 'Статистика')
    }
    validatePasswordPage() {
        cy.get('[href="/admin/password"]').click()
        cy.url().should('include', 'admin/password')
        cy.get('.Header_header__heading__swEfQ').should('have.text', 'Змінити пароль')
    }
    validateAdminLogOut() {
        cy.get('.SideBar_sidebar__QZaXJ > .Button_button__aem_D').click()
        cy.get('.Header_buttonIn__UbNpa').should('have.text', 'Вхід')
    }
}
export default AdminPanel