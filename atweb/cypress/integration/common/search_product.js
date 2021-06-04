import { Given, When, And } from 'cypress-cucumber-preprocessor/steps'

const searchProduct = require('../../support/search_product_object')
const obj = new searchProduct()

When('I search from search bar', () => {
  cy.get(obj.searchBar).click();
  cy.get(obj.searchBar).type('a52{enter}');
});

And('I got the product lists', () => {
  cy.get(obj.resultLabel).should(element => {
    expect(element).to.be.visible;
  });
});