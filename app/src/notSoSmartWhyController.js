(function () {
  'use strict';

  angular
    .module('cijug')
    .controller('NotSoSmartWhyController', NotSoSmartWhyController);

  function NotSoSmartWhyController(whyService) {
    var vm = this;

    vm.answerMe = answerMe;

    function answerMe() {
      vm.answer = whyService.getAnswerFor(vm.framework);
    }
  }
})();