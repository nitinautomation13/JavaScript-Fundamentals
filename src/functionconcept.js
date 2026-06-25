//create a function with the help of function keyword
//simple function : no ip and no retrun
function test(){
    console.log('test function');
    //this function is not having any return keyword it means this has no output
    //no output : no retrun keyword - void
}
//call function
test();

function printInfo() {
    console.log('Hello Automation');
}
printInfo();

console.log('.......................');
//2 .no input but some return
function getTrainerName(){
    console.log('get trainer name');
    let getTrainerName = 'naveen'
    return getTrainerName;
}
let name = getTrainerName();
console.log(name);
console.log(getTrainerName);//bad approch

console.log('.......................');
//some input and some return:
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function add(a, b){
    console.log('adding two numbers............');
    let c = a+b;
    return c;
}
let res =add(10, 20);
console.log(res);

let r = add(100, 200);
console.log(r);

    console.log('adding two numbers............');
//AC. Create a function
//which will calculate the studnet marks....range : 1 to 100.
//input param : studentName (string)
//retrun : mrks of student (number)
//if student name is not found............-1
/**
 * 
 * @param {string} studentName 
 * @returns this function return the student marks
 */
function getStudentMarks(studentName){
    console.log('getting marks for student : ' + studentName);
    let marks = -1;

    if(studentName === 'ravi'){
        //return 90;
        marks = 90;
    }

    else if (studentName === 'uday'){
       // return 80;
        marks = 80;
    }

    else if (studentName === 'ankit'){
        //return 100;
        marks = 100;
    }

    else{
        console.log(`${studentName} is not found`);
        
    }
    return marks;
}

//let m1 = getStudentMarks(1000);
//console.log(m1);

let m1 = getStudentMarks('ravi');
console.log(m1);


 console.log('adding two numbers............');
 /**
  * 
  * @param {string} studentName 
  */

 function getStudentMarks(studentName){
      console.log('getting marks for student : ' + studentName);

      switch (studentName.trim().toLowerCase()) {
        case 'ravi':
            return 90;

         case 'uday':
            return 80;

         case 'ankit':
            return 100;

        default:
            console.log(`${studentName} is not found`);
            return -1;
      }

      
 }

 let m2 = getStudentMarks('ravi');
 console.log(m2);
 
 console.log('=============================');
 /**
  * 
  * @param {number} Prise 
  * @param {number} tax 
  * @param {number} latfee 
  */

 function getTotalBilling(Prise, tax, latfee){
            
    console.log('calculating total billing amount : ' + getTotalBilling);
    return Prise + tax + latfee;
}

let m10 =getTotalBilling(1000, 10 , 20);
console.log(m10);

console.log(typeof getTotalBilling);
console.log(getTotalBilling.name);//name of the function is getTotalBilling
console.log(getTotalBilling.length)
