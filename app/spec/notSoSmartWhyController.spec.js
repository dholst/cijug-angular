describe('NotSoSmartWhyController', function () {
  'use strict';

  var $controller;

  describe('no stubbing', function () {
    beforeEach(module('cijug'));

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    it('should give me an answer', function () {
      var controller = createController();
      expect(controller.answer).to.be.undefined();

      controller.answerMe();

      expect(controller.answer).to.eql('because');
    });
  });

  describe('stubbing the entire service', function () {
    var getAnswerForStub;

    beforeEach(module('cijug', function($provide) {
      getAnswerForStub = sinon.stub().returns("STUBBED ANSWER!");

      $provide.value('answerService', {
        getAnswerFor: (getAnswerForStub = getAnswerForStub)
      });
    }));

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    it('should give me an answer', function () {
      var controller = createController();
      controller.framework = 'angular';
      expect(controller.answer).to.be.undefined();

      controller.answerMe();

      expect(controller.answer).to.eql('STUBBED ANSWER!');
      expect(getAnswerForStub).to.have.been.calledWith('angular');
    });
  });

  describe('stubbing an existing function', function () {
    var sandbox;
    var answerService;

    beforeEach(module('cijug'));

    beforeEach(inject(function (_$controller_, _answerService_) {
      $controller = _$controller_;
      answerService = _answerService_;
    }));

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
      sandbox.stub(answerService, 'getAnswerFor').returns('another stubbed answer');
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('should give me an answer', function () {
      var controller = createController();
      controller.framework = 'angular';
      expect(controller.answer).to.be.undefined();

      controller.answerMe();

      expect(controller.answer).to.eql('another stubbed answer');
      expect(answerService.getAnswerFor).to.have.been.calledWith('angular');
    });
  });

  function createController() {
    return $controller('NotSoSmartWhyController');
  }
});