# Some PrefixFree plugins

List of contents:

[1. Generating random numbers in CSS (prefixfree.random.js)](#1-generating-random-numbers-in-css)

[2. Get parent element in CSS selectors (prefixfree.parent.js)](#2-get-parent-element-in-css-selectors)

[3. Loop in CSS (prefixfree.loop.js)](#3-loop-in-css)

[4. Nested CSS (prefixfree.nested.js)](#4-nested-css)

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

## 2. Get parent element in CSS selectors

##### Plugin: [prefixfree.parent.js](prefixfree.parent.js)

With this plugin you can in CSS selectors select parent element. You can select parent element with code like this: 

```css
ul! > li.active {
	// styling the <ul> element
}
```

It's easy to use but it's static. On page load it's hardly write and it's not dynamicaly changing. Sometimes it's useful to have nice and pure css.

If browser support `!` in selectors then it's normal dynamic.

## 3. Loop in CSS

##### Plugin: [prefixfree.loop.js](prefixfree.loop.js)

Sometimes you have to do something more than one. Why don't use loop. Your code will be smaller and when you want rewrite something you can do it just once and not many times. :)

```css
// loop(variable name, start value, end value)
loop($i, 1, 3)
	a:nth-of-type($i) {
		width: calc(40px * $i);
	}
loopend;
```

## 4. Nested CSS

##### Plugin: [prefixfree.nested.js](prefixfree.nested.js)

With this plugin you can use nested CSS just like in LESS or SASS.

```css
header {
	h1 {
		font-size: 26px;
		font-weight: bold;
	}
	p {
		font-size: 12px;
		a {
			text-decoration: none;
			&:hover {
				border-width: 1px;
			}
		}
	}
}

/* compiled */

header h1 {
	font-size: 26px;
	font-weight: bold;
}

header p {
	font-size: 12px;
}

header p a {
	text-decoration: none;
}

header p a:hover {
	border-width: 1px;
}

```

In upper code you can see nice nested code and below you can see compiled code. You have to write semicolon after every rule to avoid errors. I really love how you can easily write it in preprocesors way.


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