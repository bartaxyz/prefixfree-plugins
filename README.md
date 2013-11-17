# Some PrefixFree plugins
## [Generating random numbers](prefixfree.random.js)

Plugin: prefixfree.random.js
With this plugin you can use in CSS something like this

```css
.some-class {
	width: random(20 - 50)px;
}
```

This will generate random number in the range of 20 and 50.

It's easy, doesn't it? :)

---

### [Other plugins](http://leaverou.github.io/prefixfree/#plugins)

You can find other plugins on official website. Very useful is plugin that allow you do this

```css
:root {
	var-maincolor: #F5F5F5;
}

body {
	background: var(maincolor);
}
```