Feature: PDP

Scenario: PDP Freight Calculation
    Given I am on the product page 
        |text|
        |copo|   
    When I type a valid zipcode
        |zipcode |
        |02535000|
    When I click on the calcular button
    Then I see the freight value