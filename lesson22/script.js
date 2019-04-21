"use strict"

var arr = new Array ('Яблоко', 'Груша');
var matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];
console.log(matrix[0][2]);


/*Split*/
var names = 'Маша, Надя, Марина, Наташа';
var arr = names.split('');//names.split(', ', 2) 2-й аргумент длинна масива / '' - без параметров каждую букву в отдельный елемент
console.log(arr);

/* join */
var arr3 = ['Маша', 'Надя', 'Марина', 'Наташа'];
var str = arr3.join(';');
console.log(str);

/* Удаоение из массива */
var arr4 = ['Маша', 'Надя', 'Марина', 'Наташа'];
delete arr4[1];
console.log(arr4[1]);

/* splice */
arr4.splice(1, 1);
console.log(arr4[1]);

var arr1 = ['Маша', 'Надя', 'Марина', 'Наташа'];
arr1.splice(1, 2, 'Катя', 'Оля');
arr4.splice(1, 2, 'Катя', 'Оля');
console.log(arr4);

var removed = arr4.splice(1, 2);
console.log(removed);

arr4.splice(1, 0, 'Наташа', 'Карина');

arr4.splice(-1, 0, 3, 4);
console.log(arr4);

/* slice */
var arr5 = ['Почему', 'надо', 'учить', 'Javascript'];
var arr6 = arr5.slice(1, 3); // Копируем с 1го по 3-й елемент
console.log(arr6);

/* Сортировка */

var arr7 = [1, 2, 15];
arr7.sort(); // 1, 15, 2 сортирует как текст по первому символу

function compareNumeric(a, b){
    if(a > b){return 1;}
    if(a < b){return -1}
}
arr7.sort(compareNumeric);

/* */
var arr8 = [1, 2, 3];
arr8.reverse();
console.log(arr8);

/* concat */

var arr9 = [1, 2];

var newArr = arr9.concat(arr8);
console.log(newArr);

/* indexOf / lastindexOf */

console.log(arr9.indexOf('2'));

/* Objact.keys(obj) */ //возвращает массив ключей

var user = {
    name: 'Petr',
    age: 30
};

var keys = Object.keys(user);
console.log(keys);

/* forEach*/

var arr10 = ["Яблоко", "Апельсин", "Груша"]
arr10.forEach(function(item, i, arr){
    console.log(i + ': ' + ' (массив:' + arr + ')');
    }
);

/* filter */

var arr11 = [1, -1, 2, -2, 3];

var positiveArr = arr11.filter(function(number){
    return number > 0;
})
console.log(positiveArr);

/* map */

var names = ['HTML', 'CSS', 'Самый популярный язык JavaScript'];
var nameLengths = names.map(function(name){
    return name.nameLengths;
})

/* evry / some */

var arr12 = [1, -1, 2, -2, 3];
function isPositive(number){
    return number > 0;
}

console.log(arr12.every(isPositive));//false
console.log(arr12.some(isPositive));//true

/* reduce \ reduceRight */

var arr13 = [1, 2, 3, 4, 5];

var result = arr13.reduce(function(sum, current){
    return sum + current;
}, 0);


/* arguments */

//function getPhone(name/*name = 'Ivanov' - так нельзя в javascript*/){
//    name = name || 'Ivanov';
//}

function getPhone(name){
    var address = arguments[i];
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

getPhone('name', 'address', 'location');









