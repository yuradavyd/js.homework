// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function Constructor(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let User = [new Constructor(6, 'Vasya', 'Popkin', 'asdaswqrd@gmail.com', '+380683446789'),
           new Constructor(2, 'Petya', 'Dopkin', 'asdasgdgsd@gmail.com', '+380683456589'),
           new Constructor(8, 'Ira', 'Lopkin', 'asdasasgd@gmail.com', '+380683456779'),
           new Constructor(3, 'Olya', 'Chopkin', 'asdasasgasd@gmail.com', '+380683856789'),
           new Constructor(5, 'Yura', 'Kopkin', 'asdasdsadf@gmail.com', '+380683256789'),
           new Constructor(1, 'Sasha', 'Mopkin', 'asdaasdsd@gmail.com', '+380683156789'),
           new Constructor(4, 'Lilia', 'Topkin', 'asdaqrwasd@gmail.com', '+380683416789'),
           new Constructor(10, 'Ostap', 'Bopkin', 'asdasasdd@gmail.com', '+380683456789'),
           new Constructor(7, 'Taras', 'Gopkin', 'asdasdfasfas@gmail.com', '+380683456710'),
           new Constructor(9, 'Pasha', 'Sopkin', 'asasddasd@gmail.com', '+380683456729')]
console.log(User);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let even = User.filter(function (even) {
    return even.id % 2 === 0;
});
console.log(even);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let increase = User.sort(function (a,b) {
    return a.id - b.id;
});
console.log(increase);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let User2 = [new Client (6, 'Vasya', 'Popkin', 'asdaswqrd@gmail.com', '+380683446789',['guitar','drums']),
             new Client (2, 'Petya', 'Dopkin', 'asdasgdgsd@gmail.com', '+380683456589',['guitar']),
             new Client (8, 'Ira', 'Lopkin', 'asdasasgd@gmail.com', '+380683456779',['guitar','drums','piano','ukulele']),
             new Client (3, 'Olya', 'Chopkin', 'asdasasgasd@gmail.com', '+380683856789',['guitar','drums','ukulele']),
             new Client (5, 'Yura', 'Kopkin', 'asdasdsadf@gmail.com', '+380683256789',['guitar','drums','piano','ukulele','electro guitar']),
             new Client (1, 'Sasha', 'Mopkin', 'asdaasdsd@gmail.com', '+380683156789',['guitar','drums','piano','ukulele','accordion']),
             new Client (4, 'Lilia', 'Topkin', 'asdaqrwasd@gmail.com', '+380683416789',['guitar','drums','ukulele','violin']),
             new Client (10, 'Ostap', 'Bopkin', 'asdasasdd@gmail.com', '+380683456789',['guitar','drums','piano','ukulele','electro guitar','accordion']),
             new Client (7, 'Taras', 'Gopkin', 'asdasdfasfas@gmail.com', '+380683456710',['guitar','ukulele']),
             new Client (9, 'Pasha', 'Sopkin', 'asasddasd@gmail.com', '+380683456729',['guitar','accordion'])]
console.log(User2);

let increase2 = User2.sort(function (a, b) {
    return a.order.length - b.order.length;
});
console.log(increase2);