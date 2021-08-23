/// <reference types="Cypress" />

//import LoginElements from '../elements/LoginElements'
//const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será da tf
    acessarSite() {
        cy.visit(url)
        //cy.visit('https://www.tf.com.br')
    }

    // Clica no botão que acessa a página de login do site
    clicarLogin() {
        cy.get('.not-logged').click()
    }

    // Clico na opcao email e senha
    clicarEmailSenha() {
        cy.get('#loginWithUserAndPasswordBtn').click()
    }

    // Informa dados
    informarDados() {
        cy.get('#inputEmail').type('qamail.ac@gmail.com')
        cy.get('#inputPassword').type('Acct2020')
    }
   
    // Clico em entrar
    clicarEntrar() {
       cy.get('#classicLoginBtn').click()
    }

    // Verifica se login foi realizado
    visualizarNome() {
        cy.get('.logged').should('contain', 'Olá, bem-vindo(a)!')
    }

    
}

export default LoginPage;