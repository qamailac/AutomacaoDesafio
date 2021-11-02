Feature: Cart

Scenario: Adding 2 products to the cart and cleaning the cart
    Given I am on the store website
    When I add the first product to the cart
    When I add the second product to the cart
    When I clean the cart
    Then I see an empty cart