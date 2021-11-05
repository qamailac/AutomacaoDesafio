/* global Given, Then, And, When */
/// <reference types="Cypress" />  

import Functions from '../pageobjects/functions'
// importa o arquivo functions.js

const functions = new Functions
// cria constante a ser usada no arquivo

//
// Desktop_PDP
// Scenario: PDP Freight Calculation
//

Given("I am on the product page", (datatable) => {
    datatable.hashes().forEach((element) => {
        functions.url_access();
        functions.cookiemessage_close();
        functions.word_type(element.text);
        functions.searchbutton_click();
        functions.pdp_access();
        functions.infomessage_close();
        functions.pdp_check();
    })
})

When("I type a valid zipcode", (datatable) => {
    datatable.hashes().forEach((item) => {
        functions.validzipcode_type(item.zipcode);
    })

})

When("I click on the calcular button", () => {
    functions.freight_calculate();
})

Then("I see the freight value", () => {
    
    functions.freight_check();
})

//
// Desktop_Cart
// Scenario: Adding 2 products to the cart and cleaning the cart
//

Given("I am on the store website", () => {
    functions.url_access();
    functions.cookiemessage_close();

})

When("I add the first product to the cart", (datatable) => {
    datatable.hashes().forEach((element) => {
        functions.word_type(element.text);
        functions.searchbutton_click();
        functions.pdp_access();
        functions.infomessage_close();
        functions.addproduct();
        functions.cart1prod_check();
        functions.cart_close();
    })
})

When("I add the second product to the cart", (datatable) => {
    datatable.hashes().forEach((element) => {
    functions.url_access();
    functions.word_type2(element.texts);
    functions.searchbutton_click();
    functions.pdp_access();
    functions.infomessage_close();
    functions.addproduct();
    functions.cart2prod_check();
    functions.cart_close();
    })
})

When("I clean the cart", () => {
    functions.cart_access();
    functions.cartCleaning();
})

Then("I see an empty cart", () => {
    functions.emptycart_check();
})


//
// Desktop_Order
// Scenario: Order process for boleto option
//

Given("I am on the store website", () => {
    functions.url_access();
    functions.cookiemessage_close();
        
})

When("I add some products to the cart", (datatable) => {
    datatable.hashes().forEach((element) => {
        functions.word_type(element.text);
        functions.searchbutton_click();
        functions.pdp_access();
        functions.infomessage_close();
        functions.validzipcode_type(element.zipcode);
        functions.freight_calculate();
        functions.addproduct();
        functions.cart1prod_check();
        functions.versacola_access();
        functions.checkout_access();
        functions.email_type(element.email);
        functions.registeredemailpopup_close();
        functions.ordercontinue_click();
    })   
})

When("I click on the boleto option", () => {
    functions.payment_select();

})

Then("I see the selected option", () => {
    
    functions.payment_check();
})