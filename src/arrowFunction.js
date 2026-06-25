//Arrow function is also called anonymous function
//has no name : anonymous function
//Arrow function:  =>
// In interview if someone asked why we are using this then simple say this is a just syntax thats why we are using this 
//no function keyword

// no param arrow function :
//if we have only one statement no curly brase required
//how to call it below function so by using class name 

let print = () => console.log('hello JS');// this function has only one body and one line of statment & here 

print(); // class by using print name then suppy 0 parameter bcz here zero parameter


//2. one Parameter arrow function
//give me any parameter so i will give name parameter as a parameter , so here consol.log whatever name i will given to you print that name

let printName = (name) => console.log(`name`) // how to call this so we have to spply argument & here whatever name i am giving to you print this name 
//=> means this name (name) to console.log(name) body

printName('Nitin');

console.log('-------------------------');

let test = (a) => console.log(a + 10);
test(20);

console.log('-------------------------');

let printNumber = (num) => console.log(`total numer : ${num + 100}`);
//how to call it - so we have to call with identifier name 
printNumber(40);

console.log('-------------------------');

let printTotal = (total) => console.log(total + 90);

printTotal(100);

console.log('-------------------------');
//console.log(`total billing : ${billing}`) - this is the body
let printTrainBill = (trainBilling) => { console.log(`total trainBilling : ${trainBilling}`) };
printTrainBill(200);
//JS says if you have one single line or boady then you can ignore the curly brases

console.log('-------------------------');

let printBill = (billing) => {
    console.log(`total billing : ${billing + 90}`)
    console.log(`billing is done`);
    console.log(`Bye!!`);
};
//multiple line always put {} brases
printBill(200);

console.log('-------------------------');
let pro = (a) => a + 4; //name of the function is anonymous function and we have to given name 
//a+4 will written back to pro nd pro will given this value to r1 and r1 is 104
let r1 = pro(100);// so what is happening here this 100 will be given to a (a) and then it will be given to the right hand side with the arrow and
// it will become 104 and now 104 will be automaetically given line 60 so we don't need to write written keyword
//then if i write in a variable like let r1 , so now the value of r1 is 

console.log(r1);

console.log('-------------------------');
/**
 * 
 * @param {string} name 
 * @returns 
 */
let doLoweCase = (name) => name.toLowerCase();

let lower = doLoweCase('TESTING'); //So testing will given to the name and this name is given to the right hand side like here (name.toLowerCase();)
//then small testing will be converted and it will be given to the lowercase
// so we have to store it in a variable 
//so the value of lower is we need to print it 

console.log(lower);

console.log('-------------------------');
// Two parameter
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns this will add two numbers
 */
let sum = (a, b) => a + b;

let p1 = sum(10, 20);
console.log(p1);

console.log('-------------------------');
let printDetials = (...details) => {
    console.log(details);
    console.log(details.length);
    return 0;
}

let s1 = printDetials('Pwan', 'Nitin', 'Amit');
console.log(s1);