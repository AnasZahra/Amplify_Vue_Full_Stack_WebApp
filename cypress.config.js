/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { defineConfig } = require("cypress");

module.exports = defineConfig({   
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
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
