(function () {
  'use strict';

  angular.module('cijug', []);

  angular
    .module('cijug')
    .controller('DirectiveDemoController', DirectiveDemoController)
    .directive('funnelDirection', funnelDirection);

  function DirectiveDemoController() {
    var vm = this;
    vm.funnelDirection = 'down';
  }

  function funnelDirection() {
    return {
      restrict: 'E',
      controller: FunnelDirectionController,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'funnelDirection.html',
      scope: {
        currentDirection: '='
      }
    };
  }

  function FunnelDirectionController() {
    var vm = this;

    vm.isUp = isUp;
    vm.isDown = isDown;
    vm.goUp = goUp;
    vm.goDown = goDown;
    console.log(vm);

    function isUp() {
      return vm.currentDirection === 'up';
    }

    function isDown() {
      return vm.currentDirection === 'down';
    }

    function goUp() {
      setCurrentDirection('up');
    }

    function goDown() {
      setCurrentDirection('down');
    }

    function setCurrentDirection(direction) {
      vm.currentDirection = direction;
    }
  }
})();