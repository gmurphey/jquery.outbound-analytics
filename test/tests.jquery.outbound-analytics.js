/*global QUnit:false, sinon:false, console:false,module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/

var _gaq = {
  push: function () {}
};

(function($) {

  module('jQuery#outboundAnalytics', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();

      sinon.spy(_gaq, 'push');
    },

    teardown: function () {
      _gaq.push.restore();
    }
  });

  test('is chainable', function () {
    strictEqual(this.elems.outboundAnalytics(),
      this.elems,
      "should be chainable");
  });

  test('only selects outbound links', function () {
    this.elems.outboundAnalytics().eq(0).find('a').click();

    sinon.assert.notCalled(_gaq.push);
  });

  test('triggers event tracking on outbound link clicks', function () {
    this.elems.outboundAnalytics().find('a').click();

    strictEqual(_gaq.push.callCount, 2, 'should track each outbound click');
  });

  test('is called with default options', function () {
    var defaultArgs = ['_trackEvent', 'Outbound Links', 'Click', 'https://github.com/', undefined, false];

    this.elems.outboundAnalytics();
    this.elems.eq(1).find('a').click();

    sinon.assert.calledWith(_gaq.push, defaultArgs);

    defaultArgs = ['_trackEvent', 'Outbound Links', 'Click', 'http://google.com/', undefined, false];
    this.elems.eq(2).find('a').click();

    sinon.assert.calledWith(_gaq.push, defaultArgs);
  });

  test('is called with custom options', function () {
    var options = {
      category: 'Outbound Affiliate',
      label: function () { return $(this).text(); },
      nonInteraction: true
    }, expectedArgs = ['_trackEvent', 'Outbound Affiliate', 'Click', 'GitHub', undefined, true];

    this.elems.outboundAnalytics(options);
    this.elems.eq(1).find('a').click();

    sinon.assert.calledWith(_gaq.push, expectedArgs);
  });
}(jQuery));
