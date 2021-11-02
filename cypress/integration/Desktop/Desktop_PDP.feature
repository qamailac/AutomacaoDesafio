Feature: PDP

Scenario: PDP Freight Calculation
    Given I am on the product page    
    When I type a valid zipcode 
    When I click on the calcular button
    Then I see the freight value