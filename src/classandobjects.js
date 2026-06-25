class Employee {


    //below is the class variable:
    //so below one is the global variable aslo bcz these are declare class level

    name;
    age;
    salary;
    isPerm;


    //constructor of the class will be called when we create object of the class
    //constructor -only and only one constructor is allowed.
    //In this below constructor what we have to supply () :
    //whenever we create the object we will say for every object it's own name, salary , age .....etc
    //so here i will say give me the name , age , salary, age isPerm 
    //{} - this the constructor boady
    //constructor(age, name, salary, isPerm) - these type of variable are local variable not global variable bcz scope of this variable only
    //{} here .
    //whenever we initilize the local variable to global variable we always use this keyword


    constructor(name, age, salary, isPerm) {

        this.name = name; // this.name (object property or instance variable) and name is local variable //this.name = name is local name
        this.age = age;
        this.salary = salary;
        this.isPerm = isPerm;
    };

    //whenever we are creating the function inside the class these are call method.

    //method : create a method name whatever methodname like and over

    study() {
        console.log(`${this.name} is studying here.....`);
    }

    getInfo() {
        console.log(`${this.age}, ${this.isPerm}, ${this.name}, ${this.salary}`);

    }

};

//Now how to create a object of this class . here we are not written any hardcoded value in this class like name is nitin , age is 38 like this .
//Object of the class using new keyword
//whenever we create the object constructor will be called
//so here whenever creating the constructor please give me nam, age ,salary, isPerm

let e1 = new Employee('Tom', 30, 12.33, true);

console.log(e1.name, e1.age);

e1.study();





