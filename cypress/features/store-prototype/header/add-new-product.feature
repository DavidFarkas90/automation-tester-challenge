Feature: Add new product funcionality

Scenario: Open Add new product panel
    Given I am logged in with correct credentials to Store app
    When I click on the New Product button in the top right corner
    Then I should see Add New Product panel opened