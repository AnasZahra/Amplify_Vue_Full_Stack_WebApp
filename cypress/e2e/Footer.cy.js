// Footer.cy.js

// Describe the test suite for the Footer component
describe('Footer Component', () => {
    // Before each test, visit the page with the Footer component
    beforeEach(() => {
      cy.visit('https://main.d2lrktgk8dd87c.amplifyapp.com/');
    });
  
    // Test the presence and text of the copyright notice
    it('displays copyright notice', () => {
      cy.get('.footer-title').should('contain.text', 'Copyright © 2023. All rights reserved');
      cy.get('.footer-title span').should('contain.text', 'GYMTIMER');
    });
  
    // Test the presence of social icons
    it('displays social icons', () => {
      cy.get('.social-icons').should('exist');
      cy.get('.social-icons a').should('have.length', 5);
    });
  
  });
  