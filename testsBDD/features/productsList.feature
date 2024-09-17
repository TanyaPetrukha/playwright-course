Feature: Product list
    
    Scenario: Verify that products have all parameters
        When User is on the Products page
        Then User sees that products with titles
        Then User sees that products with prices
        Then User sees that products with images
        