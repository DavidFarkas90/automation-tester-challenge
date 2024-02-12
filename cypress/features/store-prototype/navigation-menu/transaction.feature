Feature: Transaction funcionality

Scenario: Navigate to Transaction menu
    Given I am logged in with correct credentials to Store app
    When I click on Transaction button in the navigation menu
    Then I should see Transaction menu opened