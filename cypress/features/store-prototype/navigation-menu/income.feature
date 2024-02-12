Feature: Income funcionality

Scenario: Navigate to Income menu
    Given I am logged in with correct credentials to Store app
    When I click on Income button in the navigation menu
    Then I should see Income menu opened
    And I should see details of my account