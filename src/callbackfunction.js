//CB Function - call back function is a simple function passed as an argument to another function, which will be called later.
let sayHi = function (){
    console.log('Hii');
};


let sayHello = function (callBack) {
callBack();
};

sayHello(sayHi); //calling a function by passing a function name

console.log('=============');
//utility functions
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

//core function: end user function
function calculator(a, b, callback) {
   return callback(a, b);
};

let r1 = calculator(10, 20, add);
console.log(r1);//30

r1 = calculator(100, 50, sub);
console.log(r1);

r1 = calculator(10, 30, mul);
console.log(r1);

r1 = calculator(10, 2, div);
console.log(r1);

console.log('=============');
