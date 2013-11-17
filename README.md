# Some PrefixFree plugins

List of contents:

[1. Generating random numbers in CSS (prefixfree.random.js)](#1-generating-random-numbers-in-css)

[Other plugins](#other-plugins)

---

## 1. Generating random numbers in CSS

##### Plugin: [prefixfree.random.js](prefixfree.random.js)

With this plugin you can use in CSS something like this

```css
.some-class {
	width: random(20 - 50)px;
}
```

This will generate random number in the range of 20 and 50.

It's easy, doesn't it? :)

---

### Other plugins

You can find other plugins on [official website](http://leaverou.github.io/prefixfree/#plugins).

Very useful plugin is "CSS Variables" that alow you do this:

```css
:root {
	var-maincolor: #F5F5F5;
}

body {
	background: var(maincolor);
}
```

result will be:

```css
body {
	background: #F5F5F5;
}
```