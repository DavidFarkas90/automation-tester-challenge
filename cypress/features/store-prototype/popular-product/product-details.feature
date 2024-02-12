Feature: Product details funcionality

Scenario: Navigate to product details from Popular product widget
    Given I am logged in with correct credentials to Store app
    When I click on a product from Popular product widget
    Then I am navigated to product details page
    And I should see product details