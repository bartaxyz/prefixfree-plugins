(function() {
	if(!window.StyleFix || !window.PrefixFree) {
		return;
	}

	// check compatibility

	var elem = document.createElement('elem-1'),
		body = document.getElementsByTagName('body')[0];

	elem.innerHTML += '<elem-2></elem-2><style>elem-1! > elem-2{background:black}</style>';
	body.appendChild(elem);
	var statement = getComputedStyle(elem).backgroundColor == 'rgb(0, 0, 0)';
	body.removeChild(elem);
	if(statement) return;

	// polyfill :)

	var index = -1;

	StyleFix.register(function(css) {
		css = 'body {}' + css;
		return css.replace(/\}\s*(.+)!\s*>\s*(.+)\s*\{/gi, function(all, selector_1, selector_2) {
			++index;
			var classString = 'prefixfree-parent-' + index;

			var elements = document.querySelectorAll(selector_1),
				matchingElements = [];

			for(var i = 0; i < elements.length; ++i) {
				if(elements[i].querySelector(selector_2) != null) {
					elements[i].classList.add(classString);
					matchingElements.push(elements[i]);
				}
			}
			return '}\n\n' + '.' + classString + ' {';
		});
	});
})();