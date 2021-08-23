Feature: Login

    Scenario: Login
        Given acesso o site da tf
        When clico em login 
        And clico em email e senha
        And informo os dados
        And clico em entrar
        Then o login e realizado
        