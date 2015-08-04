(function () {
  'use strict';

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /* ~ app.js                           ~ */
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  angular.module('cijug', []);

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /* ~ appConfig.js                     ~ */
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  angular
    .module('cijug')
    .value('defaultName', 'John Doe');

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /* ~ myFirstController.js             ~ */
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  angular
    .module('cijug')
    .controller('MyFirstController', MyFirstController);

  function MyFirstController($scope, defaultName) {
    var vm = this;

    vm.name = defaultName;
  }

})();
