Feature: Create Order

    Scenario: Verify if a user is able to create an order
        Given User navigates to main page
            * User chooses a T-shirt
            * User adds T-shirt to cart
            * User changes T-shirt parameters
            * User fills a billing form 
        When User submits the billing form 
        Then Card details form is opened
        When User fills card details
        Then Order is created

