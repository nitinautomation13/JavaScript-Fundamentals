class Car {

    static wheels = 4;
    min_speed = 100;

    //private vars/methods:
    //In JS any variable is declare with # this is the private variable
    #password =1234;

    getPassword(){
        return this.#password;
    }
    
    getEngineData(){
    this.#getEngine();
    };
    //The moment if method is started with # then it autometically become private
    //now this #getEngine method if need to call then we need to create a normal method and that normal method will call private method.
    //so we Car, you access this normal method then normal will access the private method
    #getEngine(){
        console.log('car ----engine data');
    };

    start() {
        console.log('car is----start');
        console.log(this.#password);
    }

    stop() {
        console.log('car is -----stop');
    }

    refuel() {
        console.log('car is --refuel');
    }
};

class BMW extends Car {
    
    min_speed = 200;
    start() {
        console.log('BMW is----start');
    }

    autoParking() {
        console.log('BMW is----auto parking');
    }
};

class Audi extends Car {

    theftSaftey() {
        console.log('Audi is-----theft Saftey');
    }

}

export { Car, BMW, Audi };

// console.log('################');

 let car = new Car();
 console.log(car.getPassword());
 car.getEngineData();
// car.start();
// car.stop();
// car.refuel();


// let bmw = new BMW();
// bmw.stop();
// bmw.refuel();
// bmw.start();
// bmw.autoParking();

// console.log('################');

//  let car = new Car();
//  console.log(car.getPassword());
// car.start();
// car.stop();
// car.refuel();

// console.log('################');

// //we also create a object of Audi class same like BMW and Car

// let audi = new Audi();
// audi.theftSaftey();
// audi.start();
// audi.refuel();
// audi.stop();

