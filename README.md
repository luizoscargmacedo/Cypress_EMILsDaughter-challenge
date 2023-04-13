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
```sh
./node_modules/.bin/cypress run
```
or 
```sh
npx cypress run
```

- To run by TAG follow the example below.
```sh
npm run tags TAGS='@unitedkingdom'
```
or
```sh
npx cypress run TAGS='@unitedkingdom'
```
or
```sh
npx cypress run --spec "cypress/integration/functional/customer_regression/flow/unitedKingdomMarket/configureVehicles.feature"

To run by TAG and generate a report.
```sh
npm run tags TAGS='@unitedkingdom' ; npm run report 
```

### Project Information:
Version: 1.0
Created: 2023-04-13

### Developed by:
- Luiz Oscar Guabiraba de Macedo
- luiz.gmacedo@gmail.com