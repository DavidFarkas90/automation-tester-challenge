Feature: Sign out funcionality

Scenario: Sign out of application
    Given I am logged in with correct credentials to Store app
    When I click on Sign out button in the navigation menu
    Then I should be logged out of the Store app