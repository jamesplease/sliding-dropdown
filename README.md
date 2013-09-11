CSS3 Sliding Dropdown
========================
*Version 2.0.0*

This is a sliding navigation menu built using only CSS technologies. It was also made to follow the best practices of the [semantic web][sem].

You'll find both the source in both LESS and CSS.

### [View it live][example]

[sem]: http://en.wikipedia.org/wiki/Semantic_Web "Semantic Web"
[example]: http://jmeas.com/github/menu-slide/  "CSS3 Dropdown with Fade"

*Note: This menu can be made to work in legacy versions of IE, but due to the lack of an HTML5 shim the above example will only work in IE9+*

### Compatibility

The menu works great in the latest versions of the major browsers: Chrome, Firefox, Safari, Opera, and IE10+. It's also built for mobile.

Legacy versions of IE (< 10), on the other hand, will need a bit of help for the menu to work nicely. For one, you'll need to install the [html5 shim](http://code.google.com/p/html5shim/) for IE < 9 to correctly interpret the HTML.

Even with that, though, IE versions below 10 do not support transitions. What this means is that the sub-menus will just 'pop' into existence instead of sliding. To include support for those earlier browsers you'll need to use a bit of Javascript. But that goes beyond the scope of this example.

### Grunt

- `grunt` - Build the LESS and lint the result
- `grunt min` - Build the LESS, minify the result, then lint it

*Note: The `box-model` rule has been ignored in my linting process. This is because the warning given by the rule has been accounted for in my code.*


Enjoy!