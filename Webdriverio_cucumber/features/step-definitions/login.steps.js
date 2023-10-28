const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^user is located on the main page of saucedemo website$/, async () => {
    await browser.url('https://www.saucedemo.com/')
});

When(/^user click “Login” button$/, async () => {
    await $('#login-button').click()
});

Then(/^user should see “Epic sadface: Username is required” error message$/, async () => {
    await expect($('[data-test="error"]')).toHaveTextContaining('Epic sadface: Username is required')
});
