var somar = function(){
	console.log(arguments)
	var count = arguments.length;
	var soma = 0 
	for (var i = 0; i <count; i++) {
		soma += arguments[i]
	}
	return soma;
}

console.log(somar(10,20,30,67,27,14))