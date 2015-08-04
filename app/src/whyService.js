(function () {
  'use strict';

  angular
    .module('cijug')
    .factory('whyService', whyService);

  function whyService(SHRUG) {
    return {
      getAnswerFor: getAnswerFor
    };

    function getAnswerFor(question) {
      question = question || '';
      return question.match(/angular/i) ? 'Google' : SHRUG;
    }
  }
})();
