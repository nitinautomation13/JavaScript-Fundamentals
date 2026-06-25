//var is used in old js : never used in morden js/tools/pw
//Declaration
var x = 10;
var x = 20;
var x = 30;
console.log(x);

//Reassignment

var y = 100;
    y = 200;
    y = 300;

console.log(y);

//Hoisting
console.log(t);
var t = 90;
console.log(t);

//let
//Declaration:
//Redeclaration is not allowed with let variable
let p = 20;
console.log(p);

let a;
console.log(a);

//Reassignment
let total = 900;
    total = 1000;
    total = 1200;
    
console.log(total);

//Hoisting is allowed but error in RT
// console.log(h); //'h' before initialization
// let h = 20;

//3. const: whenever declare with constant variable naming covention will follow capital latter first
const PI = 3.14;
      //PI = 100;//TypeError: Assignment to constant variable.
const LOGIN_TITLE = 'LoginPage';
const DAYS_IN_WEEK = 7;
console.log(PI);
console.log(DAYS_IN_WEEK);
console.log(LOGIN_TITLE);

const days = 7;
//days = 10;
let salary = 100 * days;
console.log(salary);

//initated of let we need to use const to avoid the bug, and also no one can change the value
//when to use cont total number of days, year, title of the page, logo of the page, url,PT, Distance b/w these two things etc
//duplicate variable strictly not allowed and also we can not reassign

//const pi;//error



