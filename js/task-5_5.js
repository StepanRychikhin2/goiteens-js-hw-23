// // Напиши клас Car із зазначеними властивостями і методами.
// class Car {


// constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     this.speed = speed;
//     this.price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
// }
// static getSpecs(car){
//     console.log(
//         `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
// }
// /*
// * Додай код для того, щоб завести автомобіль
// * Записує у властивість isOn значення true
// */
// turnOn() {
// this.isOn = true;
// console.log(this.isOn);
// }
// /*
// * Додай код для того, щоб заглушити автомобіль
// * Записує у властивість isOn значення false,
// * і скидає поточну швидкість в 0
// */
// turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//     console.log(this.isOn);
//     console.log(this.speed);
// }
// /*
// * Додає до властивості speed отримане значення,
// * за умови, що результуюча швидкість
// * не більше, ніж значення властивості maxSpeed
// */
// accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//         this.speed += value;
//       } else {
//         console.log("ПЕревищує максималну швидкість");
//       }
// }
// /*
// * Забирає від властивості speed отримане значення,
// * за умови, що результуюча швидкість не менше нуля
// */
// decelerate(value) {
// this.speed - value;
// console.log(this.speed);
// }
// /*
// * Додає в поле distance кілометраж (hours * speed),
// * але тільки в тому випадку, якщо машина заведена!
// */
// drive(hours) {
//     if (this.isOn) {
//         this.distance += hours * this.speed;
//       } else {
//         console.log("Машина не заведена");
//       }
//     }
// }
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000