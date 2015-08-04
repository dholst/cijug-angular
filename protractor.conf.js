exports.config = {
  framework: 'cucumber',

  specs: [
    'app/features/*.feature'
  ],

  cucumberOpts: {
    format: 'pretty',
    require: ['features/step_definitions/**/*.js', 'features/support/**/*.js']
  },

  capabilities: {
    'browserName': 'chrome',
    'phantomjs.binary.path': './node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs'
  }
};
