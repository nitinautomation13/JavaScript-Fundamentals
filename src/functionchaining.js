function login (){
    console.log('login to app');
    search();
};
//can we call a function from another function - yes we can call it like above one search function and o/p login too app and perfrom search

function search() {
    console.log('perform search');
    addToCart();
};

function addToCart() {
    console.log('add to cart');
    //login(); - we should never write code like this , we should not get stuck in infinite calling
};
//once the excution completly done what exactly javascript wil do t the run time this particular stack will be deleted from the memory
//so 1st add to cart deleted then search then login it work lifo (last in fisrt out) (in the stack memory we always use lifo)

login();

console.log('--------------------------------')

function billing() {
    console.log('billing function')
    let x = 10;
    let y = x + 10;
    console.log(y);
    billing(); //recursive function - whenever same function calling it self
}

billing();// it will given error after calling billing function , 20 multiple time then give error Maximum call stack size exceeded
// thts why avoid recurssion as much as 
//factorial number: recrusive function


console.log('--------------------------------')

