

import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'

When('I navigate to Homepage', () => {
    cy.visit('https://practice.automationbro.com/');
});
And('Click on Shop', () => {
    cy.url().should('include','automationbro');
});
Then('Select Branded Converse',() => {
    cy.visit()
});
And(' Click on Add to cart',()=>{
    
});