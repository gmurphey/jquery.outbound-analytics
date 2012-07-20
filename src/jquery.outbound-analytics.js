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
      try {
        _gaq.push(['_trackEvent', settings.category, settings.action, settings.label, settings.value, settings.nonInteraction]);
      } catch (e) {
        // do something in the future
      }
    }).end().end();
  };

  $.outboundAnalytics = function(options) {
    $('body').outboundAnalytics(options);
  };

}(jQuery));
