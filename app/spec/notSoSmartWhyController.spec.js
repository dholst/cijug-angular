describe('NotSoSmartWhyController', function () {
  'use strict';

  var $controller;

  describe('no stubbing', function () {
    var SHRUG;

    beforeEach(module('cijug'));

    beforeEach(inject(function (_$controller_, _SHRUG_) {
      $controller = _$controller_;
      SHRUG = _SHRUG_;
    }));

    it('should give me an answer', function () {
      var controller = createController();
      expect(controller.answer).to.be.undefined();

      controller.answerMe();

      expect(controller.answer).to.eql(SHRUG);
    });
  });

  describe('stubbing the entire service', function () {
    var getAnswerForStub;

    beforeEach(module('cijug', function($provide) {
      getAnswerForStub = sinon.stub().returns("STUBBED ANSWER!");

      $provide.value('whyService', {
        getAnswerFor: getAnswerForStub
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
    var whyService;

    beforeEach(module('cijug'));

    beforeEach(inject(function (_$controller_, _whyService_) {
      $controller = _$controller_;
      whyService = _whyService_;
    }));

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
      sandbox.stub(whyService, 'getAnswerFor').returns('another stubbed answer');
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
      expect(whyService.getAnswerFor).to.have.been.calledWith('angular');
    });
  });

  function createController() {
    return $controller('NotSoSmartWhyController');
  }
});
