/// <reference types="cypress" />

import { When, Then } from 'cypress-cucumber-preprocessor/steps'
// import { contains } from 'cypress/types/jquery';

When('I navigate', () => {
    cy.visit('https://practice.automationbro.com/');
});
Then('the url must contain', () => {
    cy.url().should('include','automationbro');
});
