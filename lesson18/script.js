"use strict"

console.log('Б'>'А');
console.log('Анна'<'Бнна');
console.log('2'>1);
console.log(0==false);
console.log(''==false);
console.log(0===false);
console.log(0!==false);
console.log(null == undefined);
console.log(null >= 0);

//alert('Hi');
var result 
//result = prompt('Input text', 'by')
console.log(result)
//result = confirm('Save?')

console.log(result); //true/false   

var year
//year = prompt('Какой сейчас год?');

if (year != 2019){
    console.log('Неправильно');
}
else{
    console.log('Правильно')
}
if (year < 2019){
    console.log('меньше');
}
else if (year > 2019){
    console.log('больше')
}
else {
    console.log('равно')
}

var age = 100;
var access = (age > 14) ? true : false;

var message = (age < 3) ? 'Привет малыш' : (age < 18) ? 'Привет' : (age < 100) ? 'Привет дед' : 'Здравствуйте';
console.log(message);


console.log(true || false) //true
console.log(false || false) //false

var x;
true || (x = 1);
//alert(x);//undefined

console.log(true && false) //false
console.log(false && false) //false

var hours = 12, minute = 30;

if (hours == 12 && minute == 30){
    //alert('Время 12-30');
}

console.log(1 && 5 && 4); //выведет последнее 4

console.log(!!'привет'); //true

Number('10');//10 - число
var number = '10';
number = +number;   //+ преобразует в число

console.log(+' 123 \n \n ');

console.log(+true);

console.log('\n' == false);
console.log('1' == true);














