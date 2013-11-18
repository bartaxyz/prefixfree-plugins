# Some PrefixFree plugins

List of contents:

[1. Generating random numbers in CSS (prefixfree.random.js)](#1-generating-random-numbers-in-css)

[Other plugins](#other-plugins)

---

## 1. Generating random numbers in CSS

##### Plugin: [prefixfree.random.js](prefixfree.random.js)

With this plugin you can use in CSS something like this

**Example:**

```css
.some-class {
	width: random(20 - 50)px;
}
```

This will generate random number in the range of 20 and 50.

It's easy, isn't it? :)

##### Plugin: [prefixfree.var.js](http://leaverou.github.io/prefixfree/#plugins), [prefixfree.random.js](prefixfree.random.js)

These two plugins are very useful when you need random number or color for more than one element.

You can use only RGB colors right now. HEX isn't supported (i'm working on that).

**Example:**

```css
:root {
	var-main-color: rgb(random(160, 190), random(160, 190), random(160, 190));
}

.some-class {
	background: var(main-color);
}
```

---

### Other plugins

You can find other plugins on [official website](http://leaverou.github.io/prefixfree/#plugins).

Very useful plugin is "CSS Variables" that alow you do this:

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