

import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'

When('I navigate to Homepage', () => {
    cy.visit('https://practice.automationbro.com/');
});
And('Click on Shop', () => {
    cy.get('#menu-item-567').click();
});
Then('Select Branded Converse',() => {
    cy.get('h2').contains('Branded Converse').click();
});
And('Click on Add to cart',()=>{
    cy.get('button[name=add-to-cart]').click();
});
