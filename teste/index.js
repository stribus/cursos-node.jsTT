var Voo = function () {
    this.status = 'em voo';
}

Voo.prototype.getStatus = function() {
    return this.status;
}

var v = new Voo();
console.log(v.getStatus());

var obj = { status: 'Checkout' };
console.log(v.getStatus.apply(obj));

var somar = function () {
    console.log(arguments);
    var count = arguments.length;
    var soma = 0;

    for (var i = 0; i < count; i++) {
        soma += arguments[i];
    }

    return soma;
}
console.log(somar(50, 10, 20, 30));