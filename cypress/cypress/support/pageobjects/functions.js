/// <reference types="Cypress" />  
// exibe sugestoes de comandos

import Elements from '../pageobjects/elements';
// importa o arquivo elements.js

const elements = new Elements()
// cria constante a ser usada no arquivo

const url = Cypress.config("baseUrl")
// cria constante que recebe a url informada no arquivo cypress.json

class Functions {
    //=== Home ===
   
    url_access() {
        // funcao acessar url
        cy.visit(url)
    
    }

    cookiemessage_close() {
        // funcao fechar mensagem cookies
        cy.get(elements.cookieMessage()).click()
    }

    word_type() {
        // funcao informar palavra de busca
        cy.get(elements.searchField()).type('copo')
        cy.wait(5000)
    }

    word_type2() {
        // funcao informar palavra de busca 2
        //cy.wait(10000)
        cy.get(elements.searchField()).type('giz')
        cy.wait(5000)
    }

    searchbutton_click() {
        //funcao clicar no botao de busca
        cy.get(elements.searchButton()).click()
    }

    //=== Resultado da busca ===

    resultspage_check() {
        // funcao validar pagina de resultados
        //cy.wait(10000)
        cy.get(elements.wordSearched()).should('be.visible')
        cy.get(elements.quantityResult()).should('be.visible')
        cy.get(elements.orderingOptions()).should('be.visible')
        cy.get(elements.productPicture()).should('be.visible')
    }

    //=== PDP ===

    pdp_access() {
        //funcao clicar no botao de busca
        cy.get(elements.productPicture()).click()
        cy.wait(5000)

    }
     
    
    infomessage_close() {
        // funcao fechar mensagem cookies
        cy.get(elements.infoMessage()).click()
    }


    pdp_check() {
        // funcao validar pdp
        //cy.wait(15000)
        cy.get(elements.imageProduct()).should('be.visible')
        cy.get(elements.nameProduct()).should('be.visible')
        cy.get(elements.descriptionProduct()).should('be.visible')
        cy.get(elements.priceProduct()).should('be.visible')
        cy.get(elements.cepProduct()).should('be.visible')
        cy.get(elements.addbuttonBasket()).should('be.visible')
    }

    validzipcode_type() {
        // funcao calcular frete na pdp
        cy.get(elements.cepProduct()).type('02535000');
        cy.wait(5000)
            
    }

    freight_calculate() {
        // funcao calcular frete na pdp
        cy.get(elements.calculatebuttonFreight()).click()
        cy.get(elements.infoMessage()).click()
    }

    freight_check() {
        // funcao validar calculo frete
        //cy.wait(20000)
        cy.get(elements.calculatedFreight1()).should('be.visible')
        cy.get(elements.calculatedFreight2()).should('be.visible')
        cy.get(elements.calculatedFreight3()).should('be.visible')
        cy.get(elements.calculatedFreight4()).should('be.visible')
        cy.get(elements.calculatedFreight5()).should('be.visible')
        cy.get(elements.calculatedFreight6()).should('be.visible')
        cy.get(elements.calculatedFreight7()).should('be.visible')
        cy.get(elements.calculatedFreight8()).should('be.visible')
        cy.get(elements.calculatedFreight9()).should('be.visible')

    } 

    addproduct() {
        // funcao adicionar produto ao carrinho
        cy.get(elements.addbuttonBasket()).click()
        cy.wait(5000)

    }

    //=== Cart ===

    cart1prod_check() {
        // funcao validar carrinho com 1 produto
        //cy.wait(5000)
        cy.get(elements.titleCart()).should('be.visible')
        cy.get(elements.product1Added()).should('be.visible')
        cy.get(elements.totalCart()).should('be.visible')
        cy.get(elements.versacolaButton()).should('be.visible')
    }
    
    cart2prod_check() {
        // funcao validar carrinho com 2 produtos
        //cy.wait(5000)
        cy.get(elements.titleCart()).should('be.visible')
        cy.get(elements.product2Added()).should('be.visible')
        cy.get(elements.totalCart()).should('be.visible')
        cy.get(elements.versacolaButton()).should('be.visible')
    }

    cartCleaning() {
        // funcao limpar carrinho
        cy.get(elements.removeProd2()).click()
        cy.get(elements.removeProd1()).click()
        cy.wait(5000)

    }

    emptycart_check() {
        // funcao validar carrinho vazio
        //cy.wait(5000)
        cy.get(elements.sentenceemptyCart1()).should('be.visible')
        cy.get(elements.iconemptyCart2()).should('be.visible')
        cy.get(elements.sentenceemptyCart3()).should('be.visible')

    }
   
    cart_access() {
        //funcao clicar no botao de busca
        cy.get(elements.accessCart()).click()
        cy.wait(5000)

    }

    cart_close() {
        // funcao fechar carrinho
        cy.get(elements.closeCart()).click()
    }    


    versacola_access() {
        // funcao ver sacola 
        cy.get(elements.versacolaButton()).click()
        cy.wait(5000)
    }    

    //=== Sacola ===

    checkout_access() {
        // funcao ir para tela de pagamento
        cy.get(elements.continuetocheckoutButton()).click()
        cy.wait(5000)
    }


    email_type() {
        // funcao informar email registrado
        cy.get(elements.emailField()).type('lilian.naomi@acct.global')
        cy.get(elements.continueemailButton()).click()
            
    }

    registeredemailpopup_close() {
        // funcao fechar mensagem de email registrado
        cy.get(elements.registeredemailMessage()).click()
    }

    ordercontinue_click() {
        // funcao continuar para o pagamento
        cy.get(elements.gotopaymentButton()).click()
    }


    payment_select() {
        // funcao selecionar boleto
        cy.get(elements.boletoOption()).click()

    }

    payment_check() {
        // funcao verificar opcao selecionada
        cy.get(elements.boletoDescription()).should('be.visible')
    }


}

export default Functions;