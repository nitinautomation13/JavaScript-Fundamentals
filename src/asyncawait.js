//async function: async keyword as prefix
//it always returns a promise (generally)
//inside the async funciton body: we have to write multiple await(asynchronous/promises) steps

async function hello(){
    return "Hello World";
}
hello().then(res => console.log(res));

function fetchData(){

    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
              resolve('user data');
        }, 2000);
    })
};

async function getData(){
    console.log('fetching data......');
    //Whenever we are calling a method or any steps which are returing a promise beofore that we have to write await .
// it means at line 25 ( await fetchData(); ) please let this task completed. it says it will take 3 sec let wait await.

   let result = await fetchData(); 

//but js says that if any function having any await steps , if any of the steps having await keyword then function should be written
//with async keyword otherwise it will always n always give error .

//fetchData() givng me user data and i am storing it result variable line 25 .then i cna print it here 
//we have to write await only for those steps which are having the promise/ which are return the promise .
//whatever fetchData giving to me store it into the variable and print it into the console .


   console.log(result); 

 console.log('data fetching done....');

}

//now as user i should call the getData function.

getData();

//getData function saying you are calling me line 20 , i will print this one 1st (console.log('fetching data......');)
//then i am goin to ftchData line 25 so this will go to the (function fetchData()) this particular method to fetch the data 
//this method is taking 3 second of the time .
//so dont we think we have to wait line 25 otherwise if don't wait it will try to print the result , might give me undefined here 
//so that fetchData give me promise here so promise means wait so thats we write wait here .
