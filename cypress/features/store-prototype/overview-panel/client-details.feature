Feature: Client details funcionality

Scenario: Navigate to client details
    Given I am logged in with correct credentials to Store app
    When I click on the client image in the Top client widget
    Then I should see the client details panel