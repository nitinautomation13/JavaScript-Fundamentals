//destructruring :
//A clean way to extract the value from array or object and assign them t0 variables in a single line .

let [a, b, c] = [10, 20, 40];
console.log(a);
console.log(b);
console.log(c);
console.log(a, b, c);

let arr = [40, 50, 60];
let [x, y, z]= arr;
console.log(x, y, z);

let [p, , r] = arr
console.log(p, r);

let ar = [10];
let [a1, b1=50] = ar;

console.log(a1);
console.log(b1);

let br = [10, 50];
let [a2, b2=40] = br;
console.log(a2);
console.log(b2);

console.log('*******************************');

let num = [1, 2, 3, 4];
let [t1, ...pop] = num;
console.log(t1);
console.log(pop);

//Object destructuring:

let user = {
      name: 'Tom',
      age: 30
};
 
let {name, age} = user;
console.log(name, age);

console.log('*******************************');

//Whenever we defined the obect to write {} and for array need to write [].


let customer = {
     name : 'Peter',
     age: 40,
     city: 'LA',
     zip: 1010
};

function placeOrder({name, city}){
console.log(name, city);
};

//When i call this placeOrder function here i am doing passing the whole customer and this function is called calling a function by
//passing customer so here customer is object this is called call by refrence or call by refrence object .
//Passing the whole object at this particular function line 50(fyi).

placeOrder(customer);

console.log('*******************************');

function launchBrowser({browserName, headless, url}){
            console.log(browserName, headless, url);
};


let page ={
       title: 'login',
       browserName: 'Chrome',
       url: 'https://nas.com',
       headless: true,
       footer: [1, 2, 3]  
};

launchBrowser(page);


