module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/lib/bower_components/angular/angular.js',
      'app/lib/bower_components/angular-mocks/angular-mocks.js',
      'app/src/**/*.js',
      'app/spec/**/*.spec.js'
    ],

    autoWatch : true,

    frameworks: [
      'chai',
      'mocha',
      'sinon',
      'sinon-chai'
    ],

    browsers : [
      'PhantomJS'
    ],

    plugins : [
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-sinon',
      'karma-sinon-chai'
    ]

  });
};