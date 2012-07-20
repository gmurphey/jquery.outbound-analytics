/*! jQuery Outbound Analytics - v0.1.0 - 2012-07-20
* https://github.com/gmurphey/jquery.outbound-analytics
* Copyright (c) 2012 Garrett Murphey; Licensed MIT, GPL */

/*global _gaq: false*/

(function($) {

  $.fn.outboundAnalytics = function(options) {
    var defaults = {
          category: 'Outbound Links',
          action: 'Click',
          label: function () { return $(this).attr('href'); },
          nonInteraction: false
        },
        settings = $.extend({}, defaults, options),
        isLocalHref = new RegExp("^" + document.location.origin);

    return this.find('a[href]').filter(function () {
      return !isLocalHref.test(this.href);
    }).click(function() {
      var params = {}, link = this;

      $.each(settings, function (key, value) {
        params[key] = ($.isFunction(value)) ? value.call(link) : value;
      });

      try {
        _gaq.push(['_trackEvent', params.category, params.action, params.label, params.value, params.nonInteraction]);
      } catch (e) {
        // do something in the future
      }
    }).end().end();
  };

  $.outboundAnalytics = function(options) {
    $('body').outboundAnalytics(options);
  };

}(jQuery));
