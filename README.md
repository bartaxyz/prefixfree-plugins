# Some PrefixFree plugins

List of contents:

[1. Generating random numbers in CSS (prefixfree.random.js)](#1-generating-random-numbers-in-css)
[2. Get parent element in CSS selectors (prefixfree.parent.js)](#1-get-parent-element-in-css-selectors)

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
// Hexadecimal color is not supported. You can use only decimal values.
.some-class-2 {
	background: #random(888 - 999);
}

// random color from rgb(160, 160, 160) to rgb(190, 190, 190)
.some-class-3 {
	background: rgb(random(160 - 190), random(160 - 190), random(160 - 190));
}
```

It's easy, isn't it? :)

##### Plugin: [prefixfree.var.js](http://leaverou.github.io/prefixfree/#plugins), [prefixfree.random.js](prefixfree.random.js)

These two plugins are very useful when you need random number or color for more than one element.

**Example:**

```css
:root {
	var-main-color: rgb(random(160 - 190), random(160 - 190), random(160 - 190));
}

.some-class {
	background: var(main-color);
}

// var(main-color) will be random color on every website refresh

```

## 2. Get parent element in css selectors

##### Plugin: [prefixfree.parent.js](prefixfree.parent.js)

With this plugin you can in CSS selectors select parent element. Important is `!`. You can select parent element with code like this: 

```css
ul! > li.active {
	// styling the <ul> element
}
```

It's easy to use but it's static. On page load it's hardly write and it's not dynamicaly changing. Sometimes it's useful to have nice and pure css.

If browser support `!` in selectors then it's normal dynamic.

## 3. Loop in CSS

##### Plugin: [prefixfree.lopp.js](prefixfree.loop.js)

With this plugin you can in CSS selectors select parent element. Important is `!`. You can select parent element with code like this: 

```css
loop($i, 1, 3) // variable name, start value (include this value), end value (include this value)
	a:nth-of-type($i) {
		width: calc(40px * $i);
	}
loopend;
```

It's easy to use but it's static. On page load it's hardly write and it's not dynamicaly changing. Sometimes it's useful to have nice and pure css.

If browser support `!` in selectors then it's normal dynamic.

---

### Other plugins

You can find other plugins on [official website](http://leaverou.github.io/prefixfree/#plugins).

Very useful plugin is "CSS Variables". This plugin will allow you add variables in your css. It's [W3C solution](http://www.w3.org/TR/css-variables/#defining-variables) so it is absolutely valid to use. When CSS variables are supported by browser, this plugin will add prefix or let it be as it is.

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

**Documentation: [Official W3C documentation for CSS variables](http://www.w3.org/TR/css-variables/#defining-variables)**