Feature: Sorting funcionality

Scenario: Check statistics sorting in Statistic widget
    Given I am logged in with correct credentials to Store app
    When I click on This Month dropdown in the Statistic widget
    Then I should see dropdown menu with: [All time, This year, This week, Today]
    When I click on All time
    Then I should see statistics sorted by all time
    When I click on All time dropdown
    Then I should see dropdown menu with: [This year, This month, This week, Today]
    When I click on This year
    Then I should see statistics sorted by this year
    When I click on This year dropdown
    Then I should see dropdown menu with: [All time, This month, This week, Today]
    When I click on This week
    Then I should see statistics sorted by this week
    When I click on This week dropdown
    Then I should see dropdown menu with: [All time, This year, This month, Today]
    When I click on Today
    Then I should see statistics sorted by today
    When I click on Today dropdown
    Then I should see dropdown menu with: [All time, This year, This month, This week]