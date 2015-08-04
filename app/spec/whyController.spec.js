describe('WhyController', function () {
  'use strict';

  var controller;

  beforeEach(module('cijug'));

  beforeEach(inject(function ($controller) {
    controller = $controller('WhyController');
  }));

  it('should give me an answer', function () {
    expect(controller.answer).to.be.undefined();
    controller.answerMe();
    expect(controller.answer).to.eql('because');
  });
});