Feature: Shop funcionality

Scenario: Navigate to Shop menu
    Given I am logged in with correct credentials to Store app
    When I click on Shop button in the navigation menu
    Then I should see Shop menu opened
    And I should see products listed