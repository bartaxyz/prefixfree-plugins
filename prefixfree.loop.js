(function() {
	if(!window.StyleFix || !window.PrefixFree) {
		return;
	}

	StyleFix.register(function(css) {
		return css.replace(/loop\((.*),(.*),(.*)\)((\n|.)*)loopend;/gi, function(loop, index, from, to, text) {
			++to;
			var result = '';
			var expresion = new RegExp('\\' + index, 'gi');
			for(var i = from; i < to; ++i) {
				result += text.replace(expresion, i);
			}
			return result;
		});
	});
})();