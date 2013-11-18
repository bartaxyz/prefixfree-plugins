# Some PrefixFree plugins

List of contents:

[1. Generating random numbers in CSS (prefixfree.random.js)](#1-generating-random-numbers-in-css)

[Other plugins](#other-plugins)

---

## 1. Generating random numbers in CSS

##### Plugin: [prefixfree.random.js](prefixfree.random.js)

This plugin generate random number with function `random()` in css

You can use only RGB colors right now. HEX is not supported (i'm working on that).

**Example:**

```css
// random number from 20 to 50 pixels
.some-class-1 {
	width: random(20 - 50)px;
}

// random color from #888 to #999
// Hexadecimal color isn't supported. You can use only decimal values.
.some-class-2 {
	background: #random(888, 999);
}

// random color from rgb(160, 160, 160) to rgb(190, 190, 190)
.some-class-3 {
	background: rgb(random(160, 190), random(160, 190), random(160, 190));
}
```

It's easy, isn't it? :)

##### Plugin: [prefixfree.var.js](http://leaverou.github.io/prefixfree/#plugins), [prefixfree.random.js](prefixfree.random.js)

These two plugins are very useful when you need random number or color for more than one element.

**Example:**

```css
:root {
	var-main-color: rgb(random(160, 190), random(160, 190), random(160, 190));
}

.some-class {
	background: var(main-color);
}

// var(main-color) will be random color on every website refresh

```

---

### Other plugins

You can find other plugins on [official website](http://leaverou.github.io/prefixfree/#plugins).

Very useful plugin is "CSS Variables". This plugin will allow you add variables in your css. It's W3C solution so it is absolutely valid to use. When CSS variables are supported by browser, this plugin will add prefix or let it be as it is.

**Example:**

```css
:root {
	var-main-color: #F5F5F5;
}

body {
	background: var(main-color);
}
```

result will be:

```css
body {
	background: #F5F5F5;
}
```