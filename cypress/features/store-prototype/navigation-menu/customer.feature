Feature: Customer funcionality

Scenario: Navigate to Customer menu
    Given I am logged in with correct credentials to Store app
    When I click on Customer button in the navigation menu
    Then I should see Customer menu opened