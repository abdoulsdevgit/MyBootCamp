// What will print and why?
// What will change if we delete line 5? Why?

function x() {
    var a;
    console.log(a);
}

function y() {
    var a = 2;
    console.log(a);
    x();
}

var a = 1;
console.log(a); // will print a because of var a on the global scope
y(); 

//  y() Output 
	//2 because of var a inside y() lexical scoping
	//undefined

/*
	final output
	1
	2
	undefined
	the reason why the last one is undefined is because a is not given a 
	a value.*/