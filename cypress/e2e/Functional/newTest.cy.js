describe('Test Case', () => {
    it('should perform the test steps', () => {
      // Open website
      cy.viewport(1620, 1080)
      cy.visit('https://1000and1songs.com/');
  
      // Click on "logo icon"
      cy.get('.logo__link-img').click();
  
      // Click on "Мапа"
      cy.get('nav > div > ul > li:nth-child(4) > a').click();
  
      // Click on "Фільтр"
      cy.get('.filter__header').click();
  
      // Click on "Назва"
      cy.get('#mat-input-1').click();
  
      // Enter "Пісн" into "Назва"
      cy.get('#mat-input-1').type('Пісн').type('Пісн{enter}');
  
      // Click on "Країна"
      cy.get('svg').click();
  
      // Click on "normal"
      cy.get('mat-option:nth-child(3)').click();
  
      // Click on "Білорусь (1)Польща (2)Україна"
      cy.get('.cdk-overlay-backdrop').click();
  
      // Click on "Область"
      cy.get('path').click();
  
      // Click on "Вінницька область (1)"
      cy.get('#mat-option-98').click();
  
      // Click on "Вінницька область (1)Волинська"
      cy.get('.cdk-overlay-backdrop').click();
  
      // Click on "Населений пункт"
      cy.get('svg').click();
  
      // Click on "normal"
      cy.get('.mat-pseudo-checkbox.mat-mdc-option-pseudo-checkbox.mat-pseudo-checkbox-full.ng-star-inserted').click();
  
      // Click on "Орлівка (1)"
      cy.get('.cdk-overlay-backdrop').click();
  
      // Click on "Жанр"
      cy.get('path').click();
  
      // Click on "normal"
      cy.get('.mat-pseudo-checkbox.mat-mdc-option-pseudo-checkbox.mat-pseudo-checkbox-full.ng-star-inserted').click();
  
      // Click on "Веснянка (1)"
      cy.get('.cdk-overlay-backdrop').click();
  
      // Click on "Фонд"
      cy.get('svg').click();
  
      // Click on "Архів студентських експедицій"
      cy.get('#mat-option-210').click();
  
      // Click on "Архів студентських експедицій"
      cy.get('.cdk-overlay-backdrop').click();
  
      // Click on "Сховати фільтр"
      cy.get('button[aria-label="hide filter"]').click();
  
      // Scroll down
      cy.scrollTo('bottom');
  
      // Scroll up
      cy.scrollTo('top');
  
      // Click on "Фільтр"
      cy.get('svg').click();
  
      // Scroll down
      cy.scrollTo('bottom');
  
      // Scroll up
      cy.scrollTo('top');
    });
  });
  