/// <reference types="cypress" />

import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I navigate', () => {
    cy.visit('https://practice.automationbro.com/');
});
Then('the url', () => {
    cy.url().should('include','automationbro');
});
