Feature: Can answer the question on everyone's mind

  Background:
    Given I'm on the "controller-service" page

  Scenario: when the question is angular
    When I enter "Angular" for the framework
    And click the big green button
    Then I should see "Google" as the answer

  Scenario: when the question is not angular
    When I enter "jquery" for the framework
    And click the big green button
    Then I should see "¯\_(ツ)_/¯" as the answer