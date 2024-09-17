Feature: Header
    
    Scenario: Verify that a user can see and interact with all Header elements
        Given User is on the Product Page
        When User clicks on the Our Story section
        Then User is navigated to the Our Story page
        When User clicks on the Fur icon
        Then User is navigated to the Products page
        When User clicks on the Contact section
        Then User is navigated to the Contact page
        When User clicks on the Products section
        Then User is navigated to the Product page
        When User clicks on the Cart icon
        Then Cart form is opened
        
