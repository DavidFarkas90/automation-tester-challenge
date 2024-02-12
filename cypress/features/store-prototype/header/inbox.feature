Feature: Inbox funcionality

Scenario: Navigate to message inbox
    Given I am logged in with correct credentials to Store app
    When I click on the message icon in the top right corner
    Then I am navigated to messages inbox