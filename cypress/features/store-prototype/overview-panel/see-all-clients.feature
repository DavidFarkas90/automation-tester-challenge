Feature: See all clients funcionality

Scenario: List all clients
    Given I am logged in with correct credentials to Store app
    When I click on See all button on Top Client widget
    Then I am navigated to Clients page
    And I should be able to see all clients listed