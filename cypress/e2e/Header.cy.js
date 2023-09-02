/// <reference types="cypress" />


describe('Header Component', () => {     
    it('Navigates to different routes', () => {
      cy.visit('https://main.d2lrktgk8dd87c.amplifyapp.com/') // Change to your app's URL
  
      // Click on "PROFILE" link
      cy.contains('PROFILE').click()
      cy.url().should('include', '/profile')
  
      // Go back to the home page
      cy.go('back')
      cy.url().should('not.include', '/profile')
  
      // Click on "WORKOUT" link
      cy.contains('WORKOUT').click()
      cy.url().should('include', '/workout')
  
      // Go back to the home page
      cy.go('back')
      cy.url().should('not.include', '/workout')
  
      // Click on "HOME" link
      cy.contains('HOME').click()
      cy.url().should('equal', 'https://main.d2lrktgk8dd87c.amplifyapp.com/') // Change to your home URL
    })
  })
  