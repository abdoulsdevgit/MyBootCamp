// The variable arguments is a object that contains the parameters passed to a
// function. It is not an array, but it has an array-link structure.
// Use call() and Array.prototype.reduce() to output "Hello, world!"

// var notArr;

// function populateNotArr() {
//     notArr = arguments;
// }

// populateNotArr('Hello', ',', ' ', 'world', '!')

// console.log(notArr);



// after 

var notArr;

var reducer = function(x, y) {
	return x + y;
}

function populateNotArr() {
    notArr = arguments;
}

populateNotArr('Hello', ',', ' ', 'world', '!')
var args = Array.prototype.slice.call(notArr)
console.log(args.reduce(reducer));
