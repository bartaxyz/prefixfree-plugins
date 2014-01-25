(function() {
	if(!window.StyleFix || !window.PrefixFree) {
		return;
	}

	StyleFix.register(function(css) {

		css = css.replace(/\/\*(.|[\r\n])*?\*\//g, '');

		parseCSS = function(str) {
			if(str.indexOf('keyframes') != -1) {
				return { outer: str, inner: '', response: false };
			}

			var brackets = 0,
				selector = '',
				nestedSelector = '',
				tempString = '',
				outerString = '',
				innerString = '',
				character = '';

			for(var i = 0; i < str.length; ++i) {
				character = str[i];
				tempString += str[i];
				
				switch(character) {
					case ';':
						if(brackets < 2) {
							outerString += tempString;
						} else {
							innerString += tempString;
						}
						tempString = '';
						break;
					case '{':
						if(brackets == 0) {
							selector = tempString.replace(/\{/g, '');
						} else if(brackets == 1) {
							tempString = tempString.split(',');
							tempString = selector + tempString.join(',' + selector);
							nestedSelector = tempString;
						} else {
							if(tempString != nestedSelector) {
								innerString += tempString;
							}
							tempString = '';
						}
						brackets += 1;
						break;
					case '}':
						brackets -= 1;
						if(brackets == 0) {
							outerString += '\n}';
							tempString = '';
						} else {
							innerString += '\n}';
							tempString = '';
						}
						break;
				}
			}
			
			if(innerString != '') {
				innerString = innerString.replace(/^\s/, ' ');
			}
			var response = (innerString.split("{").length - 1 >= 2);
			
			return { outer: outerString, inner: innerString, response: response };
		};

		var nested = {
			arr: [],
			str: '',
			rule: ''
		};

		var character = ' ',
			brackets = 0,
			write = true;

		for(i = 0; i < css.length; ++i) {
			character = css[i];
			nested.rule += css[i];

			switch(character) {
				case ';':
					nested.str = '';
					break;
				case '{':
					brackets += 1;
					break;
				case '}':
					brackets -= 1;
					if(brackets == 0) {
						nested.arr.push(nested.rule);
						nested.rule = '';
					}
					break;
			}

			nested.str += character;
		}

		var newCSS = '',
			rule,
			prom,
			result;

		for(i = 0; i < nested.arr.length; ++i) {
			rule = nested.arr[i];
			prom = parseCSS(rule);
			newCSS += prom.outer;
			result = prom.response;
			while(result) {
				prom = parseCSS(prom.inner);
				newCSS += prom.outer;
				result = prom.response;
			}
			newCSS += prom.inner;
		}
		newCSS = newCSS.replace(/\s*&\s*/g, '');

		return newCSS;
	});
})();
