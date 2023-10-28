Feature: Test Login Functionality

Scenario: check login without cridentials
    Given user is located on the main page of saucedemo website
    When user click “Login” button
    Then user should see “Epic sadface: Username is required” error message