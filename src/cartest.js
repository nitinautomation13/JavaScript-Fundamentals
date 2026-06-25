import {Car, BMW, Audi} from './cardesign.js';

let bmw = new BMW();
bmw.stop();
bmw.refuel();
bmw.start();
bmw.autoParking();
console.log(bmw.min_speed);

console.log('################');

let car = new Car();
car.start();
car.stop();
car.refuel();
console.log(Car.wheels);


console.log('################');

//we also create a object of Audi class same like BMW and Car

let audi = new Audi();
audi.theftSaftey();
audi.start();
audi.refuel();
audi.stop();
console.log(audi.min_speed);

