export class MercedesMainPageSettings {
    constructor() {
        this.MercedesMainPageSettings = {
            mainMenuComponent: 'owc-header.webcomponent',
            hatchbacksLocator: '[name="sportstourer"]',
            cabrioletsLocator: '[name="convertible"]',
            ourModelsMenu: 'Our models',
            buyOnlineMenu: 'Buy online',
            ourBrand: 'Our Brand',
            aClassHatchbackLocator: 'A-Class Hatchback',
            bClassLocator: 'B-Class',
            buildYourCarLocator: 'Build your car',
            buyOnlineLocator: 'Buy online'
        }
    }

    getSelectors() {
        return this.MercedesMainPageSettings
    }


    // To validate Menu Elements
    validateMainMenuElements() {
        cy.get(this.MercedesMainPageSettings.mainMenuComponent).contains(this.MercedesMainPageSettings.ourModelsMenu).should('exist')
        cy.get(this.MercedesMainPageSettings.mainMenuComponent).contains(this.MercedesMainPageSettings.buyOnlineMenu).should('exist')
    }


    // To select a Specific Menu
    openSpecificMenu(menuOption) {
        switch (menuOption) {
            // To click on 'Our Models' Button
            case 'Our Models':
                cy.get(this.MercedesMainPageSettings.mainMenuComponent).contains(this.MercedesMainPageSettings.ourModelsMenu).click({ force: true })
                break
            // To click on 'Buy online' Button
            case 'Buy online':
                cy.contains(this.MercedesMainPageSettings.buyOnlineMenu).click({ force: true })
                break
            case 'Our Brand':
                // To click on 'Our Brand'
                cy.contains(this.MercedesMainPageSettings.ourBrand).click({ force: true })
                break
        }
    }


    // To select a Model
    selectModelOption(ourModels) {
        switch (ourModels) {
            // To click on 'Hatchbacks' Button
            case 'Hatchbacks':
                cy.get(this.MercedesMainPageSettings.hatchbacksLocator).click({ force: true })
                break
            // To click on 'Cabriolets' Button 
            case 'Cabriolets':
                cy.get(this.MercedesMainPageSettings.cabrioletsLocator).click({ force: true })
                break
        }
    }


    // To select a Hatchback Model
    selectHatchbackModel(hatchbackOption){
        switch (hatchbackOption){
            // To click on 'A-Class Hatchback' model
            case 'A-Class Hatchback':
                cy.contains(this.MercedesMainPageSettings.aClassHatchbackLocator).click({ force: true })
                break
            // To click on 'B-Class' model
            case 'B-Class':
                cy.contains(this.MercedesMainPageSettings.bClassLocator).click({ force: true })
                break
        }
    }


    // To select 'Build your car' or 'Buy online' 
    buildYourCar(buildOrBuyOption){
        switch (buildOrBuyOption){
            // To click on 'A-Class Hatchback' model
            case 'Build your car':
                cy.contains(this.MercedesMainPageSettings.buildYourCarLocator).click({ force: true })
                break
            // To click on 'B-Class' model
            case 'Buy online':
                cy.contains(this.MercedesMainPageSettings.buyOnlineLocator).click({ force: true })
                break
        }
    }


}