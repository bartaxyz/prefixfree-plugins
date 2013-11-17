(function() {
	if(!window.StyleFix || !window.PrefixFree) {
		return;
	}

	StyleFix.register(function(css) {
		return css.replace(/random\((\d+),\s*?(\d+)\)\s*?(\w+)/gi, function(exp, minNum, maxNum, unit) {
			var max = parseInt(maxNum, 10),
				min = parseInt(minNum, 10);
			if(max < min) {
				max = parseInt(minNum, 10);
				min = parseInt(maxNum, 10);
			}
			return Math.floor(Math.random() * (max - min) + min) + unit;
		});
	});
})();