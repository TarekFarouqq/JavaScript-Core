let superEngine = new Engine("Black");

let car1 = new Car("yellow","Tayota",2012,550000);
let car2 = new Car("green","Tayota",2022,130000);
let car3 = new Car("yellow","Tayota",2015,4550000);

console.log(car1.toString());
console.log(car1.moveCar("Right")); 

console.log(car2.toString());
console.log(car2.moveCar("UP")); 

console.log(car3.toString());
console.log(car3.moveCar("Left")); 

let flyingCar1 = new FlyingCar("yellow","Tayota",2012,550000,true);
let flyingCar2 = new FlyingCar("green","Tayota",2022,130000,false);


console.log(flyingCar1.toString());
console.log(flyingCar2.toString());
