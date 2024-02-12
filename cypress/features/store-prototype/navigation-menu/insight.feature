Feature: Insight funcionality

Scenario: Navigate to Insight menu
    Given I am logged in with correct credentials to Store app
    When I click on Insight button in the navigation menu
    Then I should see Insight menu opened