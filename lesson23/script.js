"use strict"

var now = new Date();
console.log(now);

var jan02_1970 = new Date(3600 * 24 * 1000);

console.log(jan02_1970);   

var date1 = new Date(2011, 0, 1, 0, 0, 0, 0);
///                 year month date hours minutes seconds milleseconds

console.log(date1);
var fullDate = new Date();
fullDate = fullDate.getFullYear();
console.log(fullDate);
//getMonth 0..11
//getDate() 1..31
//getHours() \ getMinutes \ getSeconds \getMilliseconds()
//getYear //19
//getDay() 0..6 день недели 0 - воскресенье 6 - суббота

var date2 = new Date();
console.log(date2.getHours());
console.log(date2.getUTCHours());
console.log(date2.getTime());  //millisec from 1970year
console.log(date2.getTimezoneOffset()); //разница 0  и текущее в минутах

//Установка компонентов даты

date2.setFullYear(2010); // year, month, date

console.log(date2.getFullYear());

/*
setMonth(month, date)
setDate(date)
setHours(hours, min, sec, ms)
setMinutes(min, sec, ms)
setSeconds(sec, ms)
setMilliseconds(ms)
setTime(ms)
*/

var date3 = new Date(2013, 0, 32);
console.log(date3);
date3.setDate(date3.getDate() + 3); // +3 days
console.log(date3);
date3.setDate(1); // 1 число месяца
date3.setDate(0); // последнее число месяца


var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    timezone: 'numeric',
    minute: 'numeric',
    seconds: 'numeric'
};
console.log(date3.toLocaleString('ru', options));

// YYYY-MM-DDTHH:mm:ss.sssZ
//формат даты
//2012-01-26T13:51:11:435Z
//2012-01-26T13:51:11:435+03:00 - for Safari 

var date4 = Date.now();
console.log(date4);

var a = 5;
console.log(window.a);

function func(name){
//LexicalEnviroment = {'name': 'undefined', 'arr': undefined}
    var arr = name;

}
console.log(window.func);


func('Den');
//LexicalEnviroment = {'name': 'Den', 'arr': Den}

var phrase = 'Привет';
function sayHi(name){
    console.log(phrase + ',' + name);
}

sayHi('Вася');

phrase =  'Пока';

sayHi('Вася');


function sayHiBye(firstName, lastName){
    console.log('привет ' + getFullName());
    console.log('пока ' + getFullName());
    function getFullName(){
        return firstName + ' ' + lastName;
    }
}

sayHiBye('Вася', 'Петров');


function makeCounter(){
    var currentCount = 1;

    return function(){
        return currentCount++;
    }
}

var counter = makeCounter(); //(+)

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

var counter2 = makeCounter();
console.log(counter2);








