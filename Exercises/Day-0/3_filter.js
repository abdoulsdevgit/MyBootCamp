// complete the following such that a new array with only integers
// (while numbers) is returned

var arr = ['hello', 42, true, function() {}, "123", 3.14, 0, [1], {}];

var isInteger = function(x) {return typeof x === 'number' && Number.isInteger(x)};

Array.prototype.filter = function(func) {
	var ar = []

	for (var i = 0; i < this.length; i++) {
		if(func(this[i])) {
			ar.push(this[i])
		}
	}
	return ar
};

var newArr = arr.filter(isInteger);
console.log(newArr);
