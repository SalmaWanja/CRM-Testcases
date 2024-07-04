import { loginPage } from "./modules/logins"

const loginpage = new loginPage()

describe('Login Tests', () => {
  it('Test with valid credentials', () => {
    cy.visit('https://hotpoint-sandbox-i5nt6dcbza-uc.a.run.app/login')

    loginpage.getUsename('salma.wanja@calltronix.com')
    loginpage.getPassword('salma.wanja@calltronix.com')
    loginpage.clickLoginButton()
    
    cy.url().should('not.include', '/login')
  })

  it.skip('Test with invalid username', () => {
    cy.visit('https://hotpoint-sandbox-i5nt6dcbza-uc.a.run.app/login')

    loginpage.getUsename('salmatest.wanja@calltronix.com')
    loginpage.getPassword('salma.wanja@calltronix.com')
    loginpage.clickLoginButton()
    
    cy.get('.alert')
        .should('contain','Invalid Username / Password')
  })

  it.skip('Test with invalid password', () => {
    cy.visit('https://hotpoint-sandbox-i5nt6dcbza-uc.a.run.app/login')

    loginpage.getUsename('salma.wanja@calltronix.com')
    loginpage.getPassword('salmatest.wanja@calltronix.com')
    loginpage.clickLoginButton()
    
    cy.get('.alert')
        .should('contain','Invalid Username / Password')
  })

})