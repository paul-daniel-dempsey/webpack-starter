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

for (let i=0;i<5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

