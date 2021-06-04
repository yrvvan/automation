Feature: Bukalapak - register

     Scenario: I want to checkout SKU in Bukalapak
          When I go to product detail page
          And I choose the color and type of product i want
          And I click checkout
          Then I input notes for the seller
          And I choose payment method
          And I click create order
          Then I see order confirmation page
