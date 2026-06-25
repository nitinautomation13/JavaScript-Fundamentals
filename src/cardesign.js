class Car {

    start() {
        console.log('car is----start');
    }

    stop() {
        console.log('car is -----stop');
    }

    refuel() {
        console.log('car is --refuel');
    }
};

class BMW extends Car {

    start() {
        console.log('BMW is----start');
    }

    autoParking() {
        console.log('BMW is----auto parking');
    }
};

let bmw = new BMW();
bmw.stop();
bmw.refuel();
bmw.start();
bmw.autoParking();

console.log('################');

let car = new Car();
car.start();
car.stop();
car.refuel();