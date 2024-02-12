Feature: Settings funcionality

Scenario: Navigate to Settings menu
    Given I am logged in with correct credentials to Store app
    When I click on Settings button in the navigation menu
    Then I should see Settings menu opened