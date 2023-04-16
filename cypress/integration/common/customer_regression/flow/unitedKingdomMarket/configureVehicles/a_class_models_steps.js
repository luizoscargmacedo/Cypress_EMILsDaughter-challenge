/// <reference types= "cypress" />
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"

// Pages
import { MercedesMainPageSettings } from "../../../../../../objects/mercedes_benz_website/mercedes_benz_page.js"
import { BuildYourCarSettings } from "../../../../../../objects/build_your_car/build_your_car_page.js"

// Page objects
const mercedes_main_page_settings = new MercedesMainPageSettings()
const build_your_car_settings = new BuildYourCarSettings()


////////////////////////// Given ///////////////////////////////////
// To validate if Build Your Car page is working correctly
Given('already on Build Your Car page', () => {
    build_your_car_settings.validateBuildYourCarPage()
})

////////////////////////// When ///////////////////////////////////

// To click on Fuel Type
When('click on {string} option', (fuelType) => {
    build_your_car_settings.chooseFuelType(fuelType)
})

////////////////////////// Then ///////////////////////////////////
// Then 'Build your car' screen appears successfully
Then('Build your car screen appears successfully', () => {
    build_your_car_settings.validateBuildYourCarPage()
})

// To validate Highest and Lowest price elements
Then('Highest and Lowest price appears successfully', () => {
    build_your_car_settings.validateLowestAndHighestPriceElements()
})

////////////////////////// And ///////////////////////////////////
// Choose the 'A Class' model available and proceed to 'Build your car'
And('choose the {string} model available and proceed to {string}', function (hatchbackOption, buildOrBuyOption) {
    mercedes_main_page_settings.selectHatchbackModel(hatchbackOption)
    mercedes_main_page_settings.buildYourCar(buildOrBuyOption)
})

// To collect and save Highest and Lowest price in the file A_CLASS_MODELS
And('the Values £ of each price result are saved in the file A_CLASS_MODELS', () => {
    build_your_car_settings.collectLowestPrice() 
    build_your_car_settings.collectHighestPrice() 
})