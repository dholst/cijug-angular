module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/lib/bower_components/angular/angular.js',
      'app/lib/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/lib/bower_components/angular-mocks/angular-mocks.js',
      'app/src/app.js',
      'app/src/notSoSmartWhyController.js',
      'app/src/shrug.js',
      'app/src/whyController.js',
      'app/src/whyControllerUsingScope.js',
      'app/src/whyService.js',
      'app/spec/**/*.spec.js'
    ],

    autoWatch : true,

    frameworks: [
      'chai',
      'mocha',
      'sinon',
      'sinon-chai',
      'dirty-chai'
    ],

    browsers : [
      'PhantomJS'
    ],

    plugins : [
      'karma-chai',
      'karma-dirty-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-sinon',
      'karma-sinon-chai'
    ]

  });
};
