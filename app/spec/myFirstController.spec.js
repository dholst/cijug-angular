describe('MyFirstController', function () {
  'use strict';

  var $controller;

  beforeEach(module('cijug', function ($provide) {
    $provide.value('defaultName', 'Stubbed Name');
  }));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should set the default name', function () {
    expect(createController().name).to.eql('Stubbed Name');
  });

  function createController() {
    return $controller('MyFirstController', {$scope: {}});
  }
});