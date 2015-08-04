(function () {
  'use strict';

  angular
    .module('cijug')
    .controller('WhyController', WhyController);

  function WhyController() {
    var vm = this;

    vm.answerMe = answerMe;

    function answerMe() {
      vm.answer = 'because'
    }
  }
})();