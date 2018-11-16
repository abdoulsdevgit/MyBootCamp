// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

function hasFalsyValue(obj) {
	
    if (!obj) return false;
    for (var p in obj) {
        if (!hasFalsyValue(obj[p])) return false;
    }
    return true;
}

var obj = {
	a: "abc",
	b: 1,
	c: {
		first: "john",
		//last:undefined
	}
}
hasFalsyValue(obj)
console.log(hasFalsyValue(obj))
