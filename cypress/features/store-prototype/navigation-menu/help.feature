Feature: Help funcionality

Scenario: Navigate to Help menu
    Given I am logged in with correct credentials to Store app
    When I click on Help button in the navigation menu
    Then I should see Help menu opened