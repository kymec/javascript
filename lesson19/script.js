"use strict"
var x = 1;
switch (x){ // === строгое сравнение
    case 1:
        console.log('Верно');
        break;
    case 2:
        console.log('Неверно');
        break;
    case 3:
        console.log('Неверно');
        break;
    default:
        console.log('По умолчанию');
        break;
}
var y = 'Dog';
switch (y){ // === строгое сравнение
    case 1:
        console.log('Верно');
        break;
    case 2:
        console.log('Неверно');
        break;
    case 'Dog':
        console.log('Неверно');
        break;
    default:
        console.log('По умолчанию');
        break;
}
var month = 12;
switch(month){
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Зима');
        break;
}

var a = 1;
var b = 0;

switch (a) {
    case b + 1:
        console.log(1);
        break;
    default:
        console.log('other');
}

