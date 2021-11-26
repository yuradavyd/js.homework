// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати
//    в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//  function Constructor (model, manufacturer, year, maxspeed, capacity) {
//      this.model = model;
//      this.maxspeed = maxspeed;
//      this.manufacturer = manufacturer;
//      this.year = year;
//      this.capacity = capacity;
//      this.drive = function () {
//          console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//       };
//      this.info = function () {
//          console.log(`модель - ${this.model},`, `виробник - ${this.manufacturer},` , `рік випуску - ${this.year},` , `максимальна швидкість - ${this.maxspeed},` , `об'єм двигуна - ${this.capacity},`, `${this.driver?this.driver : 'Автомобіль на автопілоті' }`)
//      };
//      this.increaseMaxSpeed = function (newSpeed) {
//          this.maxspeed = newSpeed;
//      };
//      this.changeYear = function (newValue) {
//          this.year = newValue;
//      };
//      this.addDriver = function (driver) {
//          this.driver = driver;
//      };
// }
//
// let car = new Constructor('Dodge','Chrysler',1969,'320 km/h','3.6')
// console.log(car.drive());
// console.log(car.info());
// console.log(car.increaseMaxSpeed('330 km/h'));
// console.log(car.changeYear(1980));
// console.log(car.addDriver('Lila'));
// console.log(car.info());

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Cars {
//     constructor (model, manufacturer, year, maxspeed, capacity) {
//         this.model = model;
//         this.maxspeed = maxspeed;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.capacity = capacity;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     info () {
//         console.log(`модель - ${this.model},`, `виробник - ${this.manufacturer},` , `рік випуску - ${this.year},` , `максимальна швидкість - ${this.maxspeed},` , `об'єм двигуна - ${this.capacity},`, `${this.driver?this.driver : 'Автомобіль на автопілоті' }`)
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.maxspeed = newSpeed;
//     };
//     changeYear (newValue) {
//         this.year = newValue;
//     };
//     addDriver (driver) {
//         this.driver = driver;
//     };
// }
// let cars = new Cars ('Dodge','Chrysler',1969,'320 km/h','3.6')
// console.log(cars.drive());
// console.log(cars.info());
// console.log(cars.increaseMaxSpeed('330 km/h'));
// console.log(cars.changeYear(1980));
// console.log(cars.addDriver('Lila'));
// console.log(cars.info());
// console.log(cars);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Constructor(name,age,size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

let Popelyushka = [new Constructor('Popelyushka1',37,40),
                    new Constructor('Popelyushka2',40,30),
                    new Constructor('Popelyushka3',11,21),
                    new Constructor('Popelyushka4',19,38),
                    new Constructor('Popelyushka5',30,35),
                    new Constructor('Popelyushka6',27,42),
                    new Constructor('Popelyushka7',21,37),
                    new Constructor('Popelyushka8',15,34),
                    new Constructor('Popelyushka9',78,31),
                    new Constructor('Popelyushka10',35,44)]

class Prince {
    constructor(name,age,find) {
        this.name = name;
        this.age = age;
        this.find = find;
    }
}

let prince = new Prince('Haleas',19,38)

for (let i = 0; i < Popelyushka.length; i++) {
    if (Popelyushka[i].size === prince.find ) {
        console.log('Юххууу!');
    } else {
        console.log('ехх');
    }

}
let arr = Popelyushka.find(function (item) {
    return item.size === prince.find;
});
console.log(arr);