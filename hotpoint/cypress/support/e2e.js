// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { loginPage } from '../e2e/modules/logins';
const loginpage = new loginPage()

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    // Add exception handling to prevent test failures on known exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (
            err.message.includes('google is not defined') ||
            err.message.includes('dropify is not a function') ||
            err.message.includes('Highcharts is not defined') ||
            err.message.includes('Highcharts error #13')
        ) {
            // Returning false here prevents Cypress from failing the test
            return false;
        }
    });

    //Increase screen size
    cy.viewport(1280, 720)

    //Login to the system
    cy.visit('https://hotpoint-sandbox-i5nt6dcbza-uc.a.run.app/login')

    loginpage.getUsename('salma.wanja@calltronix.com')
    loginpage.getPassword('salma.wanja@calltronix.com')
    loginpage.clickLoginButton()

})