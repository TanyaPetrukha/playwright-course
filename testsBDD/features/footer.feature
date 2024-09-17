Feature: Footer
    
    Scenario: Verify that a user can see and interact with all footer elements
        Given User is on the Product Page and scrolls to The Footer
            * User sees Logo, Sections, Copyrights
            * User sees that General section has subsections
        When User clicks on the Our Story subsection
        Then User is navigated to Our Story page
        When User clicks on the Contact subsection
        Then User is navigated to Contact page
        Given User sees that Help section has subsections
        When User clicks on the Shipping subsection
        Then User is navigated to the Delivery Details page
        When User clicks on the Returns subsection
        Then User is navigated to the Returns page
        Given User sees that Contact section has contact iformation and links to social networks
        When User clicks on the Youtube icon
        Then User is navigated to the Youtube
        Then User verifies if the year in Copyrights equal to the current
        
