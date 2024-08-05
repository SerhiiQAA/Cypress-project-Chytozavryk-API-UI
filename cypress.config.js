const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require ('@simonsmith/cypress-image-snapshot/plugin');
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',//html report
  e2e: {
    baseUrl: 'https://chytozavryk.top/',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on)
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureCypress(on, {
        resultsDir: "./allure-results",
      });
    },
  },
});


