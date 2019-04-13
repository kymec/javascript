"use strict"
var message = '';
function showMessage(){
    message = 'Hello world';
    console.log(message);
}
showMessage();

var userName = 'Вася';

function showMessage2(){
    var userName = 'Петя';
    var message = 'Привет, я ' + userName;
    console.log(message);
}
showMessage2();
//alert(userName);

function showMessage3(from, text){
    if(text === undefined){
        text = 'no text';
    }
    from = '**' + from + '**';
    console.log(from + ':' + text);
}
var from = 'Миша';
showMessage3(from, 'Привет');
console.log(from);

function calcD (a, b, c){
    return b + b - 4 + a * c;
}
var text = calcD(-4, 2, 1);
console.log(text);

var calcvvv = function(a, b, c){
    return;
};
