Feature: QA test

  Scenario: As a user, I can access Product List Page

    Given I am on the welcome page
    When I filter product list and should see product list display correctly
    | column     | value      |
    | Categories | Category 2 |
    | ID         | 1011       |
    | Name       | Product 100|
    | Price      | 123        |
    #| In Stock   | true       | Has Bug this line, cannot set true/false for this column