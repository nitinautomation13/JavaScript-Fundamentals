let p1 = Promise.resolve('Task 1 is done');

// p1.then((result)=>{

//     console.log(result);
// }) //its also working fine 
//we can use prmise method directly when we know promise can resolve directly.

p1.then((result)=> console.log(result));

console.log("===================================");

let p2 = Promise.reject('Task is rejected by 500 error');

p2.catch((error)=> console.log(error));

//we can use prmise method directly when we know promise can reject directly.

//Prmise.all function -: it means it run the multiple promise parller mode and and waits until all of them succeed.
//run multiple promises in parallel mode and waits until all of them succeed.

let p3 = Promise.resolve('task 3 done');
let p4 = Promise.resolve('task 4 done');
let p5 = Promise.resolve('task 5 done');

Promise.all([p3, p4 , p5])
        // below result means whatever p3, p4 , p5 is givng to evrything will be combine them together then i will print into the in the form of 
        //array then task 3, task 4 , task 5 is print.

       .then((result)=>{
        console.log(result);
       });

//with wait 

let p11 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
              resolve('display logo on the page');
            }, 3000)
});

let p12 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('login form error with loading...');
    }, 2000);
});

let p13 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('load footer of the page');
    }, 1000);
});

Promise.all([p11, p12, p13])
        .then((result)=> console.log(result));


//one of them is rejected/failed:

let c11 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject('display logo on the page');
    }, 5000);
});

let c12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('login form error with loading...');
    }, 2000);
});

let c13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('load footer of the page');
    }, 3000);
});

Promise.all([c11, c12, c13])
        .then((result) =>console.log(result))
        .catch((error) => console.log(error));

//2. race(): retunrs the first promise that finishes

   let t11= new Promise((resolve, reject) =>{
                 
        setTimeout(() =>{
            resolve('Display logo on the page');
        }, 1000);
    });

   let t12= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Login form error with loading...');
        },2000);
    });

     let t13 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                   reject('load footer of the page');
            },500);
         });

         Promise.race([t11, t12, t13])
            .then((result)=> console.log(result))
            .catch((error)=>console.log(error));

      //3. allsettled(): retunrs the first promise that finishes  
      //waits for all the promses to finish, whethe they succedd or failed.
          