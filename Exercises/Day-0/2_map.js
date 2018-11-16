// complete the implementation of triple and map such that
// [0,3,6,9,12] is printed

var arr = [0,1,2,3,4];

var triple = function(x) { return x * 3};

Array.prototype.map = function(arr) {
	var temp = []
	for(var i = 0; i < this.length; i++) {
		temp.push(arr(this[i]))
	}
	return temp;
};

var newArr = arr.map(triple);
console.log(newArr);
