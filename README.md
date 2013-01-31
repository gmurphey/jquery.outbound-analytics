# Outbound Analytics

A jQuery plugin aimed at making it easier to track outbound links with Google Analytics.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/gmurphey/jquery.outbound-analytics/master/dist/outbound-analytics.jquery.js.min.js
[max]: https://raw.github.com/gmurphey/jquery.outbound-analytics/master/dist/outbound-analytics.jquery.js.js

### The Basics

99% of the time you'll probably just want to track clicks on all outbound links on a page. This is easy. In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.outbound-analytics.min.js"></script>
<script>
jQuery(function($) {
  // automatically tracks all outbound links (a[href]) in the DOM
  $.outboundAnalytics();
});
</script>
```

## Fully Customized

Sometimes you may want to track only certain links, or track links in your header or footer different. This is easy, too. In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.outbound-analytics.min.js"></script>
<script>
jQuery(function($) {
  // automatically tracks all outbound links (a[href]) in <header>
  $('header').outboundAnalytics();

  // track <aside> links as 'Reference Links'
  $('aside').outboundAnalytics({ 'category': 'Reference Links' });
});
</script>
```

## Release History
- *0.1.1*: Improving external link detection.
- *0.1.0*: Intial release.
