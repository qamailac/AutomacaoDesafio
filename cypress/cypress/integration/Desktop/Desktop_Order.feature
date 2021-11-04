Feature: Order

Scenario: Order process for boleto option
    Given I am on the store website
    When I add some products to the cart
    When I click on the boleto option
    Then I see the selected option
