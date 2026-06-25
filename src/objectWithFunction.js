let user = {
    // here user is the object and inside the object we are having some properties like name, age, dept, salary, city (key and value format like below).
    //inside the object these are call properties and properties are always defined key-value paired format
    name: 'mukul',
    age: 30,
    dept: 'QA',
    salary: 30.22,
    city: 'Pune',
    comp: 'IBM',

    //inside the function we can also defined a function
    //function : are representing object behaviour as well
    //whenever we write the function inside the object then we don't need to write the function (here function is the name).
    //inside the object no function keyword is allowed . only simple function need to write without function keyword.

    coding() {
        console.log('user is coding........')
    },

    travel() {
        console.log('user is travling........')
    },

}

console.log(user);
console.log(user.name);
console.log(user.comp);

//so now we call coding function
user.coding();// it's a function so we have to call with the parenthesis

user.travel();

console.log('=======================');

let loginPage = {
username : 'nitinshukla@gmail.com',
password : 'nitin@1234',
role : 'admin',

login(){
    //console.log('login to the app :' + loginPage.username)//
    console.log('login to the app :' + this.username)  //always use this keyword bcz this keyword is used current class object
    //so now from the login i want to call reset passwrd how to call it - we use  this keyword this mean current class object simple write this.resetPwd
    this.resetPwd();
    
},

resetPwd(){
    console.log('reset the password..........')
},

logout(){
    console.log('logout from app..................')
}

}

console.log(loginPage);
console.log(loginPage.password);
loginPage.login();