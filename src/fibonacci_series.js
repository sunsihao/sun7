'use strict';

function fibonacci_series(n) {
	var arr = [];
	for(var i = 0; i <= n; i++){
		arr.push(di_gui_test(i));
	}
	return arr;
}

function di_gui_test(n){
	if (n === 0) return 0;
	if (n === 1) return 1;

	return di_gui_test(n-1) + di_gui_test(n-2);
}

module.exports = fibonacci_series;
