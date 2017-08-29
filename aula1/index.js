var Voo = function() {
	this.status = 'em voo';
}
Voo.prototype.getStatus = function(){
	return this.status;
}

var v = new Voo()
console.log(v.getStatus());