// doesn't work in the console

function forEach(array, action) {
	for (var i = 0; i < array.length; i++)
  	action(array[i]);
}

forEach([1, 2, 3], console.log);



// works (in the browser, not node)

function forEach(array, action) {
	for (var i = 0; i < array.length; i++)
  	action(array[i]);
}

forEach.call(console, [1, 2, 3], log);
