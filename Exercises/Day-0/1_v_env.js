// Modify the code below so that it prints 1, 2, 2
// console logs must stay in their respective functions
// HINT: lexical environment

function x() {
    console.log(a);
}

function y() {

	function x() {
    console.log(a);
	}

    var a = 2;
    console.log(a);
    x();
}

var a = 1;
console.log(a);
y();

/* 2 ideal solutions

	function x() {
	var a = 2
    console.log(a);
	}

	or 

	function y() {

	function x() {
    console.log(a);
	}

    var a = 2;
    console.log(a);
    x();

    }
    */
