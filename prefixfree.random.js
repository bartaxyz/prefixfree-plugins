(function() {
	if(!window.StyleFix || !window.PrefixFree) {
		return;
	}

	StyleFix.register(function(css) {
		return css.replace(/random\(([\w\d]+)\s*[-,]\s*([\w\d]+)\)/gi, function(exp, minNum, maxNum) {
			var max, min, abc;
			if(/[a-fA-F]/.test(minNum) || /[a-fA-F]/.test(maxNum)) {
				max = parseInt(maxNum, 16);
				min = parseInt(minNum, 16);
				abc = 16;
			} else {
				max = parseInt(maxNum, 10);
				min = parseInt(minNum, 10);
				abc = 10;
			}
			if(max < min) {
				max = parseInt(minNum, abc);
				min = parseInt(maxNum, abc);
			}
			var result = Math.floor(Math.random() * (max - min) + min);
			if(abc == 16) result = result.toString(16);
			return result;
		});
	});
})();