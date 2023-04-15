/// <reference types= "cypress" />
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"

// Pages
import { MercedesMainPageSettings } from "../../objects/mercedes_benz_website/mercedes_benz_page.js"
import { DataUseAgreementSettings } from "../../objects/data_use_agreement/data_use_agreement_page.js"

// Page objects
const mercedes_main_page_settings = new MercedesMainPageSettings()
const data_use_agreement_settings = new DataUseAgreementSettings()


////////////////////////// Given ///////////////////////////////////
// To open website of 'United Kingdom', 'New Zealand' or 'Germany'market (switch statement)
Given('already on Mercedes-benz {string} website', function (serviceType) {
    cy.openWebsite(serviceType) // import from "cypress/support/commands.js"
})

////////////////////////// When ///////////////////////////////////

// To validate 'Data use Agreement'and click on 'Agree to all' button
When('Data use Agreement appears and I click on {string}', function (agreementButtonOption) {
    data_use_agreement_settings.validateDataUseAgreementModal()
    data_use_agreement_settings.clickOnAgreementBannerButton(agreementButtonOption)
})

// To click on 'Our Models' and select 'Hatchbacks' option
When('click on {string} and select {string} option', function (menuOption, ourModels){
    mercedes_main_page_settings.openSpecificMenu(menuOption)
    mercedes_main_page_settings.selectModelOption(ourModels)
})

////////////////////////// Then ///////////////////////////////////

// To validate Main Menu Web Components
Then('the Main Menu Web Components were validated successfully', function () {
    mercedes_main_page_settings.validateMainMenuElements()
})

////////////////////////// And ///////////////////////////////////

