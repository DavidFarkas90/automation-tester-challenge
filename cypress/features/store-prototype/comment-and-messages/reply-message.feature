Feature: Reply funcionality

Scenario: Reply to customer message from inbox
    Given I am logged in with correct credentials to Store app
    When I click the Reply button 
    Then I am navigated to the message details in my inbox
    And I should see the message input to write a reply