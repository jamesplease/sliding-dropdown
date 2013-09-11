CSS3 Sliding Dropdown
========================
*Version 2.1.0*

This is a sliding navigation menu built using only CSS technologies. It was also made to follow the best practices of the [semantic web][sem].

You'll find both the source in both LESS and CSS.

### [View it live][example]

[sem]: http://en.wikipedia.org/wiki/Semantic_Web "Semantic Web"
[example]: http://jmeas.com/github/menu-slide/  "CSS3 Dropdown with Fade"

*Note: This menu can be made to work in legacy versions of IE, but due to the lack of an HTML5 shim the above example will only work in IE9+*

### Usage

Set the `slide-menu` class on an unordered list element.

	<ul class='slide-menu'></ul>
	
The children `li` of this menu will be the headers.

	<ul class='slide-menu'>
	  <li>I'm a header</li>
	  <li>I'm also a header</li>
	</ul>
	
The immediate children `ul` of your headers will be the items that slide down.

	<ul class='slide-menu'>
	  <li>
	    I'm a header
	    <ul>
	      <li>I'm the first option of the slide down</li>
	      <li>I'm the second option</li>
	    </ul>
	  </li>
	</ul>

And that's all there is to it.

*Note: The `slide-menu` list will collapse to 0 height due to the floating nature of the children. I didn't add a clearfix solution to this source as you likely already have one in your project. Be sure to clearfix your menu or give its parent an explicit height.*

### Compatibility

The menu works great in the latest versions of the major browsers: Chrome, Firefox, Safari, Opera, and IE10+. It's also built for mobile.

Legacy versions of IE (< 10), on the other hand, will need a bit of help for the menu to work nicely. For one, you'll need to install the [html5 shim](http://code.google.com/p/html5shim/) for IE < 9 to correctly interpret the HTML.

Even with that, though, IE versions below 10 do not support transitions. What this means is that the sub-menus will just 'pop' into existence instead of sliding. To include support for those earlier browsers you'll need to use a bit of Javascript. But that goes beyond the scope of this example.

### Grunt

- `grunt` - Build the LESS and lint the result
- `grunt min` - Build the LESS, minify the result, then lint it

*Note: The `box-model` rule has been ignored in my linting process. This is because the warning given by the rule has been accounted for in my code.*

### Updates

- *v2.1.0* - Made it more like an OOCSS component, which I hear is all the rage right now.
- *v2.0.0* - Built with LESS


Enjoy!