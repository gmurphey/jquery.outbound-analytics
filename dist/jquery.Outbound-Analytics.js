/*! jQuery Outbound Analytics - v0.1.0 - 2012-07-05
* https://github.com/gmurphey/jQuery.Outbound-Analytics
* Copyright (c) 2012 Garrett Murphey; Licensed MIT, GPL */

(function($) {

  $.fn.outboundAnalytics = function(gaObject, options) {
    var defaults = {
          "eventName": "Outbound Links",
          "onError": function() { }
        },
        settings = $.extend(defaults, options),
        isOutbound = new RegExp("^https?://" + document.location.hostname);

    $(this).find('a').filter(function () {
      return !$(this).attr('href').test(isOutbound);
    }).click(function() {
      try {
        gaObject.getTrackerByName()._trackEvent(settings.eventName, $(this).attr('href'));
      } catch (e) {
        if (typeof(settings.onError) === 'function') {
          settings.onError.call(this, e);
        }
      }
    });
  };

  $.outboundAnalytics = function(gaObject, options) {
    $(document).outboundAnalytics(gaObject, options);
  };

}(jQuery));
