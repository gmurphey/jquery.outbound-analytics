/*! Outbound Analytics - v0.1.1 - 2013-01-31
* https://github.com/gmurphey/jquery.outbound-analytics
* Copyright (c) 2013 Garrett Murphey; Licensed MIT */

(function($) {

  $.fn.outboundAnalytics = function(options) {
    var defaults = {
          category: 'Outbound Links',
          action: 'Click',
          label: function () { return $(this).attr('href'); },
          nonInteraction: false
        },
        settings = $.extend({}, defaults, options);

    return this.find('a[href]').filter(function () {
      return (this.host !== location.host);
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
