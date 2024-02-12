Feature: See all messages funcionality

Scenario: See all messages from inbox
    Given I am logged in with correct credentials to Store app
    When I click on See All button
    Then I am navigated to my inbox
    And I should be able to see all my messages