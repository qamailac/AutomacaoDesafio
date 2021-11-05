Feature: Order

Scenario: Order process for boleto option
    Given I am on the store website
    When I add some products to the cart
        |text|zipcode |email|
        |copo|02535000|lilian.naomi@acct.global|
        
    When I click on the boleto option
    Then I see the selected option
