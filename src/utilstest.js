// import print, { name as username, add as sum, test , flag, addTwoNum} from "./utils.js";
// import { getRandomNumber } from "./stringutil.js";

// console.log(getRandomNumber());
// console.log(flag);
// console.log(username);
// console.log(sum(10, 20));
// console.log(addTwoNum(100, 200));
// test();
// print();


//we can also rename it default function as we here  - for default we can write any name not need to write as keyword.
//we can also rename it non default function as well but we need to write add as (as is a keyword) nitin like that .
//We can import from multiple files 
//we can impor other files also write now we are importing one file 
//we can do import/export same file


//now i want to use expport rest function in another file .
//another way also we import directly file name 

import * as utils from './utils.js';

console.log(utils.add(10, 20), utils.name, utils.flag);
console.log(utils.addTwoNum(100, 200));

utils.default();