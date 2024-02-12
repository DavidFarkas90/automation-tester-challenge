Feature: Dashboard overview UI check

  Scenario: Validate Dashboard overview
    Given I am logged in with correct credentials to Store app
    Then I should view dashboard page with the Dashboard button preselected in the navigation menu to the left
    And I should view Store icone in the top left corner
    And I should view navigation menu with the following menus: [Dashboard, Insight, Transaction, Customer, Shop, Income, Promote, Settings, Sign Out, Help]
    And I should view search input
    And I should view overview panel with Income and Customer charts and All time sorting preselected
    And I should view Top Client lists with list of five clients
    And I should view Comment and Message panel
    And I should view message icon (Inbox), notification icon and New Product button in the upper right corner
    And I should view Popular Product panel with list of three products with All time sorting reselected
    And I should view Statistic chart with This Month sorting preselected
