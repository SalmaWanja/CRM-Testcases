export class loginPage{

    getUsename(username){
        cy.get(':nth-child(3) > .form-control').type(username)
    }

    getPassword(password){
        cy.get(':nth-child(5) > .form-control').type(password)
    }

    clickLoginButton(){
        cy.get('.text-center > .btn').click()
    }

}