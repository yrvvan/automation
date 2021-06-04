import { Given, When, And } from 'cypress-cucumber-preprocessor/steps'

const searchProduct = require('../../support/checkout_object')
const obj = new searchProduct()

When('I go to product detail page', () => {
  cy.visit(`${Cypress.env('WEBSITE_URL')}/p/handphone/hp-smartphone/4dy46l4-jual-samsung-galaxy-a52-8gb-128gb-256gb-kamera-4k-ram-8-rom-128-256-snapdragon-720g-hp-amoled-resmi-sein`);
  cy.get(obj.productTitle).should(element => {
    expect(element).to.be.visible;
  });
});

And('I choose the color and type of product i want', () => {
  cy.get(obj.selectColor).click();
  cy.get(obj.color).click();
  cy.get(obj.selectType).click();
  cy.get(obj.type).click();
});

And('I click checkout', () => {
  cy.get(obj.buyButton).click();
});

Then('I input notes for the seller', () => {
  cy.get(obj.paymentLabelPage).should(element => {
    expect(element).to.be.visible;
  });
  cy.get(obj.buyerNotes).click();
  cy.get(obj.buyerNotes).type('Pack with buble wrap please');
  cy.get(obj.checkoutButton).click();
});

And('I choose payment method', () => {
  cy.get(obj.vaPayment).should(element => {
    expect(element).to.be.visible;
  });
  cy.get(obj.vaPayment).click();
  cy.get(obj.paymentOption).click();
  cy.xpath(obj.vaBCA).click();
});

And('I click create order', () => {
  cy.get(obj.submitButton).click();
  cy.get(obj.confirmContinue).should(element => {
    expect(element).to.be.visible;
  });
  cy.get(obj.confirmContinue).click();
});

Then('I see order confirmation page', () => {
  cy.get(obj.thankyouPage).should(element => {
    expect(element).to.be.visible;
  });
});