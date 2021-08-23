/* global Given, Then, And, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site da tf", () => {
    loginPage.acessarSite();
})

When("clico em login", () => {
    loginPage.clicarLogin();
})

And("clico em email e senha", () => {
    loginPage.clicarEmailSenha();
})

And("informo os dados", () => {
    loginPage.informarDados();
})

And("clico em entrar", () => {
    loginPage.clicarEntrar();
})

Then("o login e realizado", () => {
    loginPage.visualizarNome();
})