Feature: Order

Scenario: Checkout Page Access
    Given I am on the basket page
    When I click on the continuar button
    Then I see the checkout page

Scenario: Order Payment
    Given I am on the checkout page
    When I click on the boleto bancario option
    Then I see the selected option