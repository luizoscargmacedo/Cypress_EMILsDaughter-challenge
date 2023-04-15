export class BuildYourCarSettings {
    constructor() {
        this.BuildYourCarSettings = {
            fuelTypeLocator: 'Fuel type',
            moreFiltersLocator: 'More filters',
            dieselFuelType: 'input[name="Diesel"]',
            premiumFuelType:'input[name="Premium"]',
            superFuelType: 'input[name="Super"]',
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
        if (dataUseAgreement !==0 || dataUseAgreement !== undefined) {
            cy.contains(this.BuildYourCarSettings.dataUseAgreement.agreeToAllBttn).click({ force: true })
          } else {
            cy.contains(this.BuildYourCarSettings.moreFiltersLocator).should('exist')
          }      
    }


    // To choose Fuel Type
    chooseFuelType(fuelType) {
        cy.contains('Fuel type').click({ force: true }).scrollIntoView({ duration: 500 })
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

}