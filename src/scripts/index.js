import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

// var carId1 = 2;
// let carId2 = 2;
// const carId = 100;

// function sendCars(day, ...allCarIds) {
//   allCarIds.forEach(id =>console.log(day+ ' / '+ id));
// }
// sendCars('Monday',100,200, 555);

// let carIds = [1,2,5];
// let car1, remainingCars;
// [car1, ...remainingCars] = carIds;
// console.log(car1, remainingCars);

// let car = { id: 5000, style: 'convertable'};
// let id, style;
// ({id,style} = car);
// console.log(id,style);

// function startCars(car1,car2,car3,...rest) {
//   console.log(rest);
// }
// let carIds= [1,2,3,4,5,6];
// startCars(...carIds);

// typeof(1);
// typeof(true);
// typeof('Hello');
// typeof(function(){});
// typeof({});
// typeof(null);
// typeof(undefined);
// typeof(NaN);


//console.log(Number.parseFloat('55.88ABC'));

//console.log('webpack starterkit!!' + carId + '/' + carId1 + '/'  + carId2);

// for (let i=0;i<5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// let id = 123;
// console.log(id !== '123');

// let year=1967;
// console.log(++year);
// console.log(year++);
// console.log(year);
// console.log(++year);

// let year1="1967";
// console.log(+year1);
// console.log(typeof(+year1));
// console.log(-year1);
// console.log(typeof(-year1));

// if (5 === 3 && 6 === 3) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }

// let userSettings = null;
// let defaultSettings = { name: 'Default'};
// console.log( userSettings || defaultSettings);

// let car = null;
// if (!car) {
//   console.log('error!');
// }
// else {
//   console.log(car);
// }

// let s1 = 'Zoo';
// let s2 = 'alphabet';

// if ( s1 < s2) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if ( s1.toUpperCase < s2.toUpperCase) {
//   console.log(true);
// } else {
//   console.log(false);
// }

 // let anum = 4;
 // console.log ( 55 > anum ? 'yes' : 'no');

// let year = 1964;
// year += 10;
// console.log(year);

// function startCar(carId) {
//   let message = 'Starting...' + carId;
//   let startFn = function turnKey() {
//     let message = 'Override';
//     console.log(message);
//   };
//   startFn();
//   console.log(message);
// }
// startCar(123);

// let app = (function() { console.log('in function'); return {};})();
// console.log(app);

// let app1 =(function() {
//   let carId =123+1;
//   let getId = function() {
//     return carId;
//   };
//   return { getId: getId};
// })();
// console.log(app1.getId());

// let o = {
//   carId : 123,
//   getId : function() {
//     return this.carId+1;
//   }
// };
// console.log(o.carId + ' / ' + o.getId());

// let o = {
//   carId : 123,
//   getId : function() {
//     return this.carId + 1;
//   }
// };
// let newCar = {carId : 456};
// console.log(o.getId.call(newCar));

// let o = {
//   carId : 123,
//   getId : function(prefix) {
//     return prefix + this.carId + 1;
//   }
// };
// let newCar = {carId : 456};
// console.log(typeof(o.getId));
// console.log(o.getId.apply(newCar,['ID: ']));

// let o = {
//   carId : 123,
//   getId : function() {
//     return this.carId;
//   }
// };
// let newCar = {carId : 456};
// let newFn = o.getId.bind(newCar);
// console.log(newFn());

// let getId1 = (prefix,suffix) => { return prefix + 123 + suffix;};
// console.log(getId1('ID:','!'));
// let getId2 = (prefix,suffix) => prefix + 123 + suffix;
// console.log(getId2('ID:','!'));
// let getId3 = () =>  123;
// console.log(getId3());

// let trackCar = function(carId, city='NY') {
//   console.log(`Tracking ${carId} in ${city}`);
// };
// console.log(trackCar(123));
// console.log(trackCar(123,'Chicago'));

// function Car(id) {
//   this.carId = id;
//   this.start = function() { console.log('start: '+ this.carId);};
// }
// let vehicle = new Car(123);
// console.log(vehicle.start() );

// function Car1(id) {
//   this.carId = id;
// }
// Car1.prototype.start = function() { console.log('start: '+ this.carId);};
// let vehicle1 = new Car1(123);
// console.log(vehicle1.start() );

// String.prototype.hello = function() { return this.toString() + ' Hello';};
// console.log('foo'.hello());

// let busIds = [{ id: 123, style : 'doubledecker'},{ id: 1234, style : 'singledecker'}];
// console.log(JSON.stringify(busIds));

// let jsonIn =`[{"carId" : 123},{"carId" : 456},{"carId" : 789}]`;
// let carIds = JSON.parse(jsonIn);
// console.log(JSON.stringify(carIds));

// let carIds = [{"carId" : 123, style: 'sedan'},{"carId" : 789, style: 'convertible'},{"carId" : 456, style: 'sedan'}];
// let convertibles = carIds.filter(car => car.style === 'convertible');
// let allcarsabove = carIds.filter(car => car.carId > 123);
// let everycargreater = carIds.every(car => car.carId > 122);
// let firstcargreater = carIds.find(car => car.carId > 123);
// console.log(convertibles);
// console.log(allcarsabove);
// console.log(everycargreater);
// console.log(firstcargreater);

// class Car {
//   constructor(id){
//     this.id = id;
//   }
//   identify(suffix) {
//     return `Car Id: ${this.id} ${suffix}`;
//   }
// }
// let car = new Car(123);
// console.log(car.id);
// console.log(car.identify('!!!'));

// class Vehicle {
//   constructor() {
//     this.type = 'car';
//   }
//   start() {
//     return `Starting: ${this.type}`;
//   }
// }
// class Car extends Vehicle {
//   constructor() {  
//     super();
//   }
//   start() {
//     return `in Car start ` + super.start();
//   }
// }
// let car = new Car();
// console.log(car.start());

import { Car } from './models/car';
let car = new Car(123);
console.log(car.id);