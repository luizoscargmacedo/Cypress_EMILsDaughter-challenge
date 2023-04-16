export class BuildYourCarSettings {
    constructor() {
        this.BuildYourCarSettings = {
            fuelTypeLocator: 'Fuel type',
            moreFiltersLocator: 'More filters',
            dieselFuelType: 'input[name="Diesel"]',
            premiumFuelType: 'input[name="Premium"]',
            superFuelType: 'input[name="Super"]',
            headerPriceLocator: 'span[class="cc-motorization-header__price--with-environmental-hint"]',
            poundSignElement: '£',
            jsonFile: 'cypress/fixtures/aClassModel/A_CLASS_MODELS.json',
            a200SportModel: 'A 200 d Sport Executive Hatchback',
            a200PremiumModel: 'A 200 d AMG Line Premium Plus Hatchback',
            dataUseAgreement: {
                modalTitle: 'We use cookies for various purposes',
                agreeToAllBttn: 'Agree to all'
            }
        }
    }

    getSelectors() {
        return this.BuildYourCarSettings
    }


    // To validate BuildYourCarPage
    validateBuildYourCarPage() {
        let dataUseAgreement = this.BuildYourCarSettings.dataUseAgreement.modalTitle
        // Sometimes the Data Use Agreement appears, because of that I create this function. 
        cy.contains(this.BuildYourCarSettings.fuelTypeLocator, { timeout: 7000 }).should('exist')
        if (dataUseAgreement !== 0 || dataUseAgreement !== undefined) {
            cy.contains(this.BuildYourCarSettings.dataUseAgreement.agreeToAllBttn).click({ force: true })
        } else {
            cy.contains(this.BuildYourCarSettings.moreFiltersLocator).should('exist')
        }
        cy.screenshot('build_your_car_page_BUILD_YOUR_CAR_VAL') 
    }


    // To choose Fuel Type
    chooseFuelType(fuelType) {
        cy.contains('Fuel type').click({ force: true }).scrollIntoView({ duration: 500 })
        cy.screenshot('build_your_car_page_CHOOSE_FUEL_TYPE') 
        switch (fuelType) {
            // To click on 'Diesel' option
            case 'Diesel':
                cy.get(this.BuildYourCarSettings.dieselFuelType).last().click({ force: true })
                break
            // To click on 'Premium' option
            case 'Premium':
                cy.get(this.BuildYourCarSettings.premiumFuelType).last().click({ force: true })
                break
            case 'Super':
                // To click on 'Super' option 
                cy.get(this.BuildYourCarSettings.superFuelType).last().click({ force: true })
                break
        }
    }

    // To validate Lowest and Highest Price Elements on Page
    validateLowestAndHighestPriceElements() {
        cy.contains(this.BuildYourCarSettings.a200SportModel).should('exist')
        cy.contains(this.BuildYourCarSettings.a200PremiumModel).should('exist')
        cy.get(this.BuildYourCarSettings.headerPriceLocator).contains(this.BuildYourCarSettings.poundSignElement).should('exist')
        cy.screenshot('build_your_car_page_LOWEST_AND_HIGHEST_PRICE') 
    }

    // To collect and save Lowest Price in FILE.json
    collectLowestPrice() {
        cy.readFile(this.BuildYourCarSettings.jsonFile).then((folder) => {
            cy.get(this.BuildYourCarSettings.headerPriceLocator).eq(0).contains(this.BuildYourCarSettings.poundSignElement).invoke('text').then((text) => {
                folder.basicModel.lowestPrice = text.substring(1)
                cy.writeFile(this.BuildYourCarSettings.jsonFile, folder)
            })
        })
    }

    // To collect and save Highest Price in FILE.json
    collectHighestPrice() {
        cy.readFile(this.BuildYourCarSettings.jsonFile).then((folder) => {
            cy.get(this.BuildYourCarSettings.headerPriceLocator).eq(2).contains(this.BuildYourCarSettings.poundSignElement).invoke('text').then((text) => {
                folder.premiumModel.HighestPrice = text.substring(1)
                cy.writeFile(this.BuildYourCarSettings.jsonFile, folder)
            })
        })
    }

}