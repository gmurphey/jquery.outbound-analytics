# jQuery Outbound Analytics

A plugin aimed at making it easier to track outbound links with Google Analytics.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/gmurphey/jquery.Outbound-Analytics/master/dist/jquery.Outbound-Analytics.min.js
[max]: https://raw.github.com/gmurphey/jquery.Outbound-Analytics/master/dist/jquery.Outbound-Analytics.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.outbound-analytics.min.js"></script>
<script>
jQuery(function($) {
  $.outboundAnalytics();
});
</script>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
- *0.1.0*: Intial release.

## License
Copyright (c) 2012 Garrett Murphey  
Licensed under the MIT, GPL licenses.
