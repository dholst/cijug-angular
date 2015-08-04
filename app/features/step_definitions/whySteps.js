module.exports = function () {
  this.Given(/^I'm on the "([^"]*)" page$/, function (page) {
    browser.get(page + '.html');
  });

  this.When(/^I enter "([^"]*)" for the framework$/, function (framework) {
    element(by.model('vm.framework')).sendKeys(framework);
  });

  this.When(/^click the big green button$/, function () {
    element(by.css('.btn-lg.btn-success')).click();
  });

  this.Then(/^I should see "([^"]*)" as the answer$/, function (expectedAnswer) {
    return expect(element(by.css('.answer')).getText()).to.eventually.eql(expectedAnswer);
  });
};