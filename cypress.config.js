const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200/ticket-ordering/add',
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})
