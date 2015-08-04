(function () {
  'use strict';

  angular
    .module('cijug')
    .factory('answerService', answerService);

  function answerService() {
    return {
      getAnswerFor: getAnswerFor
    };

    function getAnswerFor(question) {
      return 'because';
    }
  }
})();
