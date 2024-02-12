Feature: Search funcionality

Scenario: Search for a product
    Given I am logged in with correct credentials to Store app
    When I enter "headset" in the search bar
    Then I should see a list of search results related to headset product