const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  video: false,
  testRunner: "mocha",
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: false,
    html: false,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
  },

  component: {
    setupNodeEvents(on, config) {},
    specPattern: "src/components/**/*.*",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
