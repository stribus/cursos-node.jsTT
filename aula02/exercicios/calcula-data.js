/*
    Criar um script em node que calcule e mostre
    a quantidade de dias que faltam para o natal,
    baseado na data de hoje.
*/

var hoje = new Date();
var natal = new Date(2017, 11, 25);
var mili = (natal - hoje);
var dias = mili / 1000 / 60 / 60 / 24;

console.log('dias', Math.ceil(dias));