// App.cy.js
/// <reference types="cypress" />
// Describe the test suite for the App component
describe('App Component', () => {
    // Before each test, visit the page with the App component
    beforeEach(() => {
      cy.visit('https://main.d2lrktgk8dd87c.amplifyapp.com/');
    });
  
    // Test the presence and functionality of the Header component
    it('displays Header component', () => {
      cy.get('header').should('exist');
      cy.get('.logo').should('contain.text', 'GymTimer');
      cy.get('.nav-link').should('have.length', 3);
  
      // Add more tests for Header component interactions as needed
    });
  
    // Test the presence and functionality of the Footer component
    it('displays Footer component', () => {
      cy.get('footer').should('exist');
      cy.get('.footer-title').should('contain.text', 'Copyright © 2023. All rights reserved');
      cy.get('.footer-title span').should('contain.text', 'GYMTIMER');
      cy.get('.social-icons').should('exist');
      cy.get('.social-icons a').should('have.length', 5);
  
      // Add more tests for Footer component interactions as needed
    });
  
    
  
  });
  