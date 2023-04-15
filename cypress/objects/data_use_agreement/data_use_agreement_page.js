export class DataUseAgreementSettings {
    constructor() {
        this.DataUseAgreementSettings = {
            locators: {
                agreeToAllBttn: 'Agree to all',
                imprintOption:'Imprint',
                privacyPolicyOption:'Privacy Policy'
            },
            textValues: {
                modalTitle: 'We use cookies for various purposes',
                mercedesGroupText: 'We, Mercedes-Benz Group (UK) and Mercedes-Benz AG, would like to enable you '
            }
        }
    }

    getSelectors() {
        return this.DataUseAgreementSettings
    }

    // To validate if the 'Data Use Agreement Modal' appears correctly
    validateDataUseAgreementModal() {
        cy.contains(this.DataUseAgreementSettings.textValues.modalTitle, { timeout: 7000 }).should('be.visible')
        cy.contains(this.DataUseAgreementSettings.textValues.mercedesGroupText).should('exist')
    }

    // To click on 'Agree to all' or other option (switch statement)
    clickOnAgreementBannerButton(agreementOption) {
        switch (agreementOption) {
            // To click on 'Agree to all' Button
            case 'Agree to all':
                cy.contains(this.DataUseAgreementSettings.locators.agreeToAllBttn).click({ force: true })
                break
            // To click on 'Imprint' Button
            case 'Imprint':
                cy.contains(this.DataUseAgreementSettings.locators.imprintOption).click({ force: true })
                break
            case 'Privacy Policy':
            // To click on 'Privacy Policy' 
                cy.contains(this.DataUseAgreementSettings.locators.privacyPolicyOption).click({ force: true })
                break
        }
    }

}