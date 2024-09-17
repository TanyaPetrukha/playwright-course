Feature: Contact Page
    
    Scenario: Verify if a user is able to leave a message to Support 
        Given User navigates to Contact Page
            * User sees title, map and contact form  
        When User fills and submits the contact form 
        Then User is navigated to success page

