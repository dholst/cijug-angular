(function () {
  'use strict';

  angular
    .module('cijug')
    .controller('NotSoSmartWhyController', NotSoSmartWhyController);

  function NotSoSmartWhyController(answerService) {
    var vm = this;

    vm.answerMe = answerMe;

    function answerMe() {
      vm.answer = answerService.getAnswerFor(vm.framework);
    }
  }
})();