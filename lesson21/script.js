"use strict"

var str = "Я программист";
console.log(str.charAt(0));
console.log(str.charAt(str.length-1));
console.log(str[0]);

console.log(str[3].toUpperCase());
console.log(str.indexOf('гра', 2));
console.log(str.lastIndexOf('гра', 10));
console.log('Foundpos');

var target = 'м', pos = 0;
while(true){
    var foundPos = str.indexOf(target, pos);
    if(foundPos == -1) break;
    console.log(foundPos);
    pos = foundPos + 1;
}

console.log(str.substring(2, 6));//2-й параметр позиция необязательно
console.log(str.substr(2, 3));//2-й параметр кол-во символов необязательно
console.log(str.slice(2, 6));// в отличии от сабстринг - это с конца а не позиция текста

console.log('test me'.substring(-2));
console.log('test me'.slice(-2));

var str3 = '';

for (var i = 1034; i <= 1113; i++){
    str3 += String.fromCharCode(i);
}
console.log(str3);
console.log('apple'.charCodeAt(2));

var obj = {};

obj.name = 'Andrew';
obj.age = 25;
console.log(obj.name + obj.age);
delete obj.age;
console.log(obj.age);   
var obj2 = {
    'name' : 'Andrew',
    'age' : '25'
};

if ('name' in obj2){
    console.log('такое имя есть');
}

console.log(obj.weight); 
if(obj.weight === undefined){

}
var obj4 = {
    name : '',
    phone : '',
    'items' : {
        1 : {
            'item name' : '',
            'price' : 100
        },
        2 : {

        } 
    },
    'time delivery' : '10:00'
}

obj4.items[1].price;
obj4['items']['1']['price'];

var counter = 0;
for(var key in obj4){
    console.log('Ключ: '+ key + ' Значение: ' + obj4[key]);
    counter++;
}

var codes = {
    '7' : 'Россия',
    '38' : 'Украина',
    '1' : 'США'
    /*
    1 7 38
--------------------
    '+7' : 'Россия',
    '+38' : 'Украина',
    '+1' : 'США'
    
    +7 +38 +1
--------------------
    */
}

var clone = {}
for (var key in codes){
    clone['key'] = codes['key'];
}

var arr = [];
var arr = ['Apple', 'Orange', 'Plum'];
console.log(arr[0]);
arr[0] = 'Pear';
arr[3] = 'Mandarin';
console.log(arr.length);
console.log(arr);

arr.pop(); //удаление последнего элемента
arr.push('strawberry') //добавляет элемент в конец
arr.[arr.length] = 'strawberry';//==
arr.unshift('Orange')//добавляет в  начало unshift('Orange', 'apple', ...)

//arr.age = 25; так нельзя
//pop push быстрые
//shift unshift - медленно

