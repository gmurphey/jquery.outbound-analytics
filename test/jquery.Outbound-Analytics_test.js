/*global QUnit:false, sinon:false, console:false,module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/

var _gaq = {
  push: function () {}
};

(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

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

    ok(_gaq.push.notCalled, 'should not be called on local links');
  });

  test('triggers event tracking on outbound link clicks', function () {
    this.elems.outboundAnalytics().find('a').click();

    strictEqual(_gaq.push.callCount, 2, 'should track each outbound click');
  });
}(jQuery));
