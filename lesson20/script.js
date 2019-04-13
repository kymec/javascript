"use strict"

var params = 'age, name';
var code = 'console.log(age + " - " + name)';
var sum = new Function(params, code);
sum(25, "John");

var x = 2;
var n = 4;
function pow(x, n){
    if(n != 1){
        return x * pow(x, n - 1);
    } else{
        return x;
    }
}
console.log(pow(x, n));

var f = function(name){};

f = function sayHi(name){};

function f(n){
    return n ? n * f(n-1) : 1;
}

console.log(f(5));

var g = f;
f = null;
var str = 'Hello world';
console.log(str.length);
console.log(str.toUpperCase());
var n = 200.35789;
console.log(n.toFixed(3));

console.log(isNaN(0/0));
console.log(isFinite(Infinity));
console.log(+" -12")
console.log(parseInt("12px"));
function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
console.log(isNumeric('ff'));
var n = 255;
console.log(n.toString(16));
console.log(Math.floor(3.1));
console.log(Math.ceil(3.1));
console.log(Math.round(3.5));

n = 3.2554;
console.log(Math.round(n * 100) / 100);

n = 12.35;

console.log( +n.toFixed(1) );

console.log(0.1 + 0.2 == 0.3);


console.log((0.1 * 10 + 0.2 * 10) / 10 );

var result = 0.1 + 0.2;

console.log(+result.toFixed(10));

var number = 50005499;
console.log(number.toLocaleString());

/*Спец символы
\b - backspace
\n - перенос строки
\r - абзац
\t - tab
\u - unicode

*/
console.log('Hello \u13e6 \"\' \\ Andrew');
var str = 'Programming';
console.log(str.charAt(3));
console.log(str[5]);


