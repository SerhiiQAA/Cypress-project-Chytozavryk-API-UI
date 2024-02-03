

describe('Admin panel', () => {
    it('Admin panel',() => {
        //  cy.viewport(1620, 1080)
// log in
         cy.login('info@chytozavryk.top', 'admin1')
         cy.get('a.Button_button__aem_D:nth-child(1)').should('have.text', 'Адміністрування')
// users page
         cy.get('a.Button_button__aem_D:nth-child(1)').click()
         cy.url().should('include', 'admin')
         cy.get('.Header_header__heading__swEfQ').should('have.text', 'Користувачі')
// books page
         cy.get('.NavBar_navigation__Cc7wX > :nth-child(2)').click()
         cy.url().should('include', 'admin/books')
         cy.get('.Header_header__heading__swEfQ').should('have.text', 'Книги')
// quizes page
         cy.get('.lucide-chevron-down').click()
         cy.get('.NavBar_navigation__Cc7wX > :nth-child(3)').click()
         cy.url().should('include', 'admin/quizzes')
         cy.get('.Header_header__heading__swEfQ').should('have.text', 'Вікторини')
// documentation page
         cy.get('[href="/admin/documents"]').click()
         cy.url().should('include', 'admin/documents')
         cy.get('.Header_header__heading__swEfQ').should('have.text', 'Документи')
// partners page
         cy.get('[href="/admin/partners"]').click()
         cy.url().should('include', 'admin/partners')
         cy.get('.Header_header__heading__swEfQ').should('have.text', 'Партнери')
// contacts page
         cy.get('[href="/admin/contacts"]').click()
         cy.url().should('include', 'admin/contacts')
         cy.get('.Header_header__heading__swEfQ').should('have.text', 'Контакти')
// statistic page
         cy.get('[href="/admin/statistics"]').click()
         cy.url().should('include', 'admin/statistics')
         cy.get('.Header_header__heading__swEfQ').should('have.text', 'Статистика')
// password page
         cy.get('[href="/admin/password"]').click()
         cy.url().should('include', 'admin/password')
         cy.get('.Header_header__heading__swEfQ').should('have.text', 'Змінити пароль')
// log out
         cy.get('.SideBar_sidebar__QZaXJ > .Button_button__aem_D').click()
        //  cy.get('.Header_buttonIn__233bB').should('have.text', 'Вхід')
    })
})