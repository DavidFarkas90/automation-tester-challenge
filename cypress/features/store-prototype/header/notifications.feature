Feature: Notification funcionality

Scenario: Open notifications panel
    Given I am logged in with correct credentials to Store app
    When I click on the notifications icon in the top right corner
    Then I should see a list of all notifications