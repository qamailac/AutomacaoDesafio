/// <reference types="Cypress" />

class Elements {
    // Home
    
    loginButton = () => { return 'div.relative > .vtex-button > .vtex-button__label' }
    searchField = () => { return '#downshift-0-input'}
    searchButton = () => { return '.vtex-store-components-3-x-searchIcon' }
    cookieMessage = () => { return '.lebiscuit-le-component-0-x-modalcookie__message > .vtex-button > .vtex-button__label' }

    // Result page

    wordSearched = () => {return '.vtex-search-result-3-x-galleryTitle--layout'}
    filterOptions = () => { return '.vtex-search-result-3-x-filterMessage'}
    quantityResult = () => { return '.vtex-search-result-3-x-totalProducts--layout > :nth-child(1)'}
    orderingOptions = () => {return '.vtex-search-result-3-x-orderByButton'}
    productPicture = () => { return '#gallery-layout-container > :nth-child(1)'}


    // Product page 

    imageProduct = () => { return '.vtex-store-components-3-x-productImageTag' }
    nameProduct = () => { return '.vtex-store-components-3-x-productBrand' }
    descriptionProduct = () => { return ':nth-child(4) > .vtex-store-components-3-x-productDescriptionContainer > .vtex-store-components-3-x-productDescriptionText > .vtex-store-components-3-x-container' }
    colorProduct = () => { return '.vtex-store-components-3-x-skuSelectorOptionsList' }
    priceProduct = () => {return ':nth-child(2) > .vtex-product-price-1-x-sellingPrice'}
    cepProduct = () => { return '.vtex-address-form-4-x-input' }
    calculatebuttonFreight = () => {return'.vtex-store-components-3-x-shippingContainer > .vtex-button > .vtex-button__label'}
    minusbuttonQuantity = () => {return '.vtex-numeric-stepper__minus-button'}
    plusbuttonQuantity = () => {return '.vtex-numeric-stepper__plus-button'}
    addbuttonBasket = () => { return '.mt4 > .pr0 > .vtex-button > .vtex-button__label' }
    calculatedFreight1 = () => { return ':nth-child(1) > .vtex-store-components-3-x-shippingTableCellDeliveryName' }
    calculatedFreight2 = () => { return ':nth-child(1) > .vtex-store-components-3-x-shippingTableCellDeliveryEstimate' }
    calculatedFreight3 = () => { return ':nth-child(1) > .vtex-store-components-3-x-shippingTableCellDeliveryPrice' }
    calculatedFreight4 = () => { return ':nth-child(2) > .vtex-store-components-3-x-shippingTableCellDeliveryName' }
    calculatedFreight5 = () => { return ':nth-child(2) > .vtex-store-components-3-x-shippingTableCellDeliveryEstimate' }
    calculatedFreight6 = () => { return ':nth-child(2) > .vtex-store-components-3-x-shippingTableCellDeliveryPrice' }
    calculatedFreight7 = () => { return ':nth-child(3) > .vtex-store-components-3-x-shippingTableCellDeliveryName' }
    calculatedFreight8 = () => { return ':nth-child(3) > .vtex-store-components-3-x-shippingTableCellDeliveryEstimate' }
    calculatedFreight9 = () => { return ':nth-child(3) > .vtex-store-components-3-x-shippingTableCellDeliveryPrice' }
    infoMessage = () => { return '._hj-102w7__styles__openStateToggleIcon' }

    // Cart
   
    titleCart = () => { return '.vtex-minicart-2-x-minicartTitle' }
    product1Added = () => { return '.vtex-minicart-2-x-minicartProductListContainer > :nth-child(1) > :nth-child(1) > .pt5' }
    product2Added = () => { return ':nth-child(2) > .pt5' }
    quantityselectorCart1 = () => {'[data-testid=quantity-dropdown-1846210465] > label.h-100 > .vtex-styleguide-9-x-container > .o-0'}
    quantityselectorCart2 = () => {'[data-testid=quantity-dropdown-1792841468] > label.h-100 > .vtex-styleguide-9-x-container > .o-0'}
    totalCart = () => { return '.vtex-minicart-2-x-minicartSummary' }
    versacolaButton = () => { return '#proceed-to-checkout > .vtex-button__label' }
    removeProd1 = () => { return '#remove-button-1846210465' }
    removeProd2 = () => { return '#remove-button-1792841468' }
    emptyCart1 = () => {return '.lh-copy > .b'}
    emptyCart2 = () => { return '.vtex-minicart-2-x-minicartEmptyStateContainer > :nth-child(1) > .mt0 > .items-stretch > .vtex-flex-layout-0-x-flexCol' }
    emptyCart3 = () => { return '.vtex-minicart-2-x-minicartEmptyStateContainer > :nth-child(3) > .mt0 > .items-stretch > .vtex-flex-layout-0-x-flexCol' }
    accessCart = () => {return '.vtex-minicart-2-x-minicartIconContainer'}
    closeCart = () => {return '.vtex-minicart-2-x-closeIconButton'}

    // Sacola



}

export default Elements;