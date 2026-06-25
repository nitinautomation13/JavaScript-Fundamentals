
let name = 'Tom';
let flag = true;

function add(a, b){

    return a+b;
}

function test(){
    console.log('test method');
}

//We can also write export like this export(name, add, test);

export{name, add, test, flag, addTwoNum};

//default function is not participate in destructring
//default will always come along with export as well
//Can we have two default properties in the same file - No (we need diside we want to go with the default variable or default function)
//Only one default property allowed
//do i need to export the default and import - Yes
//How to import default function or variable with the destructing or without destructring -default will never participate destructring
//Always write before the destructring just like the utilstest.js line number 1.it should not be in the bracket.

//Arrow function

let addTwoNum = (a, b) => a+b;
//identifier name is addTwoNum



export default function print(){
    console.log('Print default function');
}