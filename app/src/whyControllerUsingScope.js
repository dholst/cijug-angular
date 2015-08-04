(function () {
  'use strict';

  angular
    .module('cijug')
    .controller('WhyControllerUsingScope', WhyControllerUsingScope);

  function WhyControllerUsingScope($scope) {
    $scope.answerMe = function () {
      $scope.answer = 'because';
    }
  }
})();