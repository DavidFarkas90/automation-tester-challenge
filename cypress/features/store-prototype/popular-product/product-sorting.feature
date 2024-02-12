Feature: Sorting funcionality

Scenario: Check product sorting in Popular product widget
    Given I am logged in with correct credentials to Store app
    When I click on All time dropdown in the Popular product widget
    Then I should see dropdown menu with: [This year, This month, This week, Today]
    When I click on This year
    Then I should see products sorted by this year
    When I click on This year dropdown
    Then I should see dropdown menu with: [All time, This month, This week, Today]
    When I click on This month
    Then I should see products sorted by this month
    When I click on This month dropdown
    Then I should see dropdown menu with: [All time, This year, This week, Today]
    When I click on This week
    Then I should see products sorted by this week
    When I click on This week dropdown
    Then I should see dropdown menu with: [All time, This year, This month, Today]
    When I click on Today
    Then I should see products sorted by today
    When I click on Today dropdown
    Then I should see dropdown menu with: [All time, This year, This month, This week]