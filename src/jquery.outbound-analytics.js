/*
 * jquery.Outbound-Analytics
 * https://github.com/gmurphey/jQuery.Outbound-Analytics
 *
 * Copyright (c) 2012 Garrett Murphey
 * Licensed under the MIT, GPL licenses.
 */

/*global _gaq: false*/

(function($) {

  $.fn.outboundAnalytics = function(options) {
    var defaults = {
          "eventName": "Outbound Links",
          "onError": function() { }
        },
        settings = $.extend(defaults, options),
        isLocalHref = new RegExp("^https?://" + document.location.hostname);

    $(this).find('a[href]').filter(function () {
      return !$(this).attr('href').test(isLocalHref);
    }).click(function() {
      try {
        _gaq.getTrackerByName()._trackEvent(settings.eventName, $(this).attr('href'));
      } catch (e) {
        if (typeof(settings.onError) === 'function') {
          settings.onError.call(this, e);
        }
      }
    });
  };

  $.outboundAnalytics = function(options) {
    $('body').outboundAnalytics(options);
  };

}(jQuery));
