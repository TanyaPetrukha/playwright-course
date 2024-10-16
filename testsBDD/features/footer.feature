Feature: Footer

  Scenario: Verify that user can see footer elements
    Given User is on the Product Page and scrolls to The Footer
    And User sees Logo, Sections, Copyrights
    And User sees that General section has subsections
    And User sees that Help section has subsections
    And User sees that Contact section has contact information and links to social networks

  Scenario: Verify navigation to Our Story page
    Given User is on the Product Page and scrolls to The Footer
    When User clicks on the Our Story subsection
    Then User is navigated to Our Story page

  Scenario: Verify navigation to Contact page
    Given User is on the Product Page and scrolls to The Footer
    When User clicks on the Contact subsection
    Then User is navigated to Contact page

  Scenario: Verify navigation to Delivery Details page
    Given User is on the Product Page and scrolls to The Footer
    When User clicks on the Shipping subsection
    Then User is navigated to the Delivery Details page

  Scenario: Verify navigation to Returns page
    Given User is on the Product Page and scrolls to The Footer
    When User clicks on the Returns subsection
    Then User is navigated to the Returns page

  Scenario: Verify YouTube link in Contact section
    Given User is on the Product Page and scrolls to The Footer
    When User clicks on the Youtube icon
    Then User is navigated to the Youtube

  Scenario: Verify copyright year
    Given User is on the Product Page and scrolls to The Footer
    Then User verifies if the year in Copyrights equal to the current
    
