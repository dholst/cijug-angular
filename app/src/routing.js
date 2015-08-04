(function () {
  'use strict';

  angular.module('cijug', [
    'ui.router'
  ]);

  angular
    .module('cijug')
    .config(routeConfig)
    .controller('FrameworkController', FrameworkController)
    .controller('HomeController', HomeController)
    .constant('FRAMEWORKS', [
      {id: '1', name: 'AngularJS'},
      {id: '2', name: 'Ember.js'},
      {id: '3', name: 'Backbone.js'},
      {id: '4', name: 'script.aculo.us', lol: true}
    ]);

  function routeConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('/#', 'home');
    $urlRouterProvider.otherwise('home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('framework', {
        url: '/framework/:id',
        templateUrl: 'framework.html',
        controller: 'FrameworkController',
        controllerAs: 'vm'
      })
  }

  function FrameworkController($stateParams, FRAMEWORKS) {
    var vm = this;

    (function constructor() {
      vm.framework = _.findWhere(FRAMEWORKS, {id: $stateParams.id});
    })();
  }

  function HomeController(FRAMEWORKS) {
    var vm = this;

    (function constructor() {
      vm.frameworks = FRAMEWORKS;
    })();
  }
})();