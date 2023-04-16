# EMILsDaughter-challenge
Emil's Daughter - Automation Challenge

## README 
Basic Automation Structure

#### Frameworks: 
- Node.js, Cypress with Cucumber (BDD - Gherkin features).

#### Project Structure:
- Gherkin features (Cucumber) "cypress/integration/functional"
- Steps definitions "cypress/integration/common/customer_regression"
- .gitignore rule to not upload the videos, reports, screenshots and "node_modules" in repository

#### Installation and Configuration: 
- Clone the project repository.
- Node.js is necessary.
- To install the project dependencies (open folder 'EMILsDaughter-challenge' by terminal):
```sh
 npm install
```

- To install Cypress:
```sh
 npx cypress install
 ```


#### To run the automation tests:
- To run the automation tests with interface (UI mode)
```sh
npx cypress open
```
click on 'validateA_ClassModelsPrice.feature' (Cypress Window)


- To run the automation tests without interface (headless mode):
```sh
npx cypress run --browser chrome
```

- To run by TAG follow the example below.
```sh
npx cypress run TAGS='@unitedkingdom' --browser chrome
```


- To run the automation tests with FIREFOX BROWSER
```sh
npx cypress run --browser firefox
```


#### Report of Automation Tests
EMILsDaughter-challenge/report
- Right Click on 'mochawesome.html', select the 'Copy Path' and open the PATH copied on the Browser.


#### Screenshots Results of Automation Tests
cypress/screenshots/functional/customer_regression/flow/unitedKingdomMarket/validateA_ClassModelsPrice.feature


### Project Information:
Version: 1.0
Created: 2023-04-13

### Developed by:
- Luiz Oscar Guabiraba de Macedo
- luiz.gmacedo@gmail.com