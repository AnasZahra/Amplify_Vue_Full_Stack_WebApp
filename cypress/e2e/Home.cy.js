// Home.cy.js

// Describe the test suite for the Home component
describe('Home Component', () => {
    // Before each test, visit the specified URL
    beforeEach(() => {
      cy.visit('https://main.d2lrktgk8dd87c.amplifyapp.com/');
    });
  
  
    // Test the presence and functionality of the main section
    it('displays main section', () => {
      cy.get('.main').should('exist');
      cy.get('h2').should('contain.text', 'Your Workout.Your Day.');
      cy.get('h3').should('exist');
      cy.get('.main-btn-up').should('exist');
  
      // Add more tests for main section content and interactions as needed
    });
  
    // Test the presence and functionality of the features section
    it('displays features section', () => {
      cy.get('.features').should('exist');
      cy.get('.titel').should('exist');
      cy.get('.card').should('have.length', 3);
  
    });
  
  });
  