//collection of similar or different data in js
//Array : []

let num = [10, 20, 30, 40]

console.log(num[0]);
console.log(num[3]);
console.log(num[4]);
console.log(num[-1]);

console.log(num.length);
console.log("Li = " + 0);
console.log("Hi ="  +  (num.length-1) );

num[4] = 50;
console.log(num);
console.log(num.length);

num[10] = 100;
console.log(num);
console.log(num[8]);
console.log(num[9]);
console.log(num[10]);

num[8] = 900;
console.log(num);


console.log('..............................');

let stName = ['Tom', 'Ravi'];
console.log(stName);
stName[0] = 'Neeta';
console.log(stName);
stName[5] = 'Rohit';
console.log(stName);


let emData = ['Pratik', 30 , 'SDET', 'IBM', 12.33, true]
console.log(emData);
console.log(typeof emData);//object


console.log('..............................');

const p = [10, 20, 30];
p[0] = 500;
console.log(p);

const p = [10, 20, 30];//duplicate variable not allowed


