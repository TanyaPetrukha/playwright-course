Feature: Create Order

  Scenario: Verify if a user is able to create an order with different t-shirts
    Given User navigates to main page
    When User chooses a T-shirt "<tshirt>" 
    * User adds T-shirt to cart
    * User changes T-shirt parameters to "<size>" and "<color>"
    * User fills a billing form 
    When User submits the billing form 
    Then Card details form is opened
    When User fills card details
    Then Order is created

  Examples:
    | tshirt              | size   | color  |
    | Sacha the Deer      | Small  | Black  |
    | Sacha the Deer      | Medium | Blue   |
    | Sacha the Deer      | Large  | Cream  |
    | Todd the Hedgehog   | XL     | Clay   |

  Scenario: Verify if a user is able to create an order with multiple t-shirts
    Given User navigates to main page
    * User chooses a T-shirt "Gavin the Tiger" and adds 2 to cart
    * User continues shopping 
    * User chooses a T-shirt "Gerald the Giraffe" and adds 1 to cart
    * User verifies order summary has 2 "Gavin the Tiger" and 1 "Gerald the Giraffe" with correct pricing
    * User fills a billing form 
    When User submits the billing form 
    Then Card details form is opened
    When User fills card details
    Then Order is created

  Scenario: Verify if a user is able to edit product quantity in the cart
    Given User navigates to main page
    * User chooses a T-shirt "Gavin the Tiger" and adds 2 to cart
    * User continues shopping 
    * User chooses a T-shirt "Gerald the Giraffe" and adds 1 to cart
    * User corrects quantity of "Gavin the Tiger" t-shirt to 1
    * User fills a billing form 
    When User submits the billing form 
    Then Card details form is opened
    When User fills card details
    Then Order is created  