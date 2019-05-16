"use strict"

var mess = "aa";
(function(){
    var mess = "GG";
    function message(){
        console.log(mess);
    }
    message();
}());

var car = {
    'name': 'ford',
    'model': 'mustang',
    'engine': 2.0,
    'wheels': 4,
    'getSpeed': function(){
        console.log('200 km/h')
    },
    'setRotateRight': function(deg){
        console.log('Повернуть вправо на ' + deg + ' градусов');
    },
    'getMaxSpeed': function(){
        console.log(this.engine * this.wheels * 50);
    }
};
car.setRotateRight(45);
car.getSpeed();
car.getFuel = function(){
    console.log('80%');
}
car.getFuel();

car.getMaxSpeed();

var user = {
    'name': 'Vasilii',
    sayHi: function(){
        console.log(this.name);
    }
}
var admin = user;
user = null;
admin.sayHi();

var user2 = {
    'name': 'Vasilii',
    sayHi: function(){
        showName(this);
    }
};

function showName(namedObj){
    console.log(namedObj.name);
};

user2.sayHi();   


function func(name, age){
    console.log('Hello'+ name + age);
};
//setTimeout(func, 2000);
var timerId1 = setTimeout(func, 2000, 'Petro', '20');


var timerId2 = setTimeout(function(){
    console.log('Good bye');
}, 5000)
clearTimeout(timerId2);

console.log(timerId1);
console.log(timerId2);

var i = 0;
var timerId3 = setInterval(function(){
    console.log(i++);
}, 1000); 
setTimeout(function(){
    clearInterval(timerId3);
    console.log('stop');
}, 1000);
var i = 0;
var timerId4 = setTimeout(function tick(){
    i++;
    timerId4 = setTimeout(tick, 1000);
    if (i % 2){        
        console.log('tak');
    } else{
        console.log('tik');
    }
    if (i == 10){
        clearInterval(timerId4);
    }
}, 2000)

