@aclassmodel
@unitedkingdom
@pricevalidation
@fullregression

Feature: Validate A Class models price
  As a user would like to validate A Class models price are between £15,000 and £60,000

  Scenario: Open Mercedes-benz United Kingdom market and validate the Main Menu
    Given already on Mercedes-benz 'United Kingdom' website
    When Data use Agreement appears and I click on 'Agree to all'
    Then the Main Menu Web Components were validated successfully

  Scenario: Choose the 'A Class' model available 
    When click on 'Our Models' and select 'Hatchbacks' option
    And choose the 'A-Class Hatchback' model available and proceed to 'Build your car'
    Then Build your car screen appears successfully

  Scenario: Filter by Fuel type 'Diesel' and validate the highest and lowest price results
    Given already on Build Your Car page
    When click on 'Diesel' option
    # Then Highest and Lowest price appears successfully