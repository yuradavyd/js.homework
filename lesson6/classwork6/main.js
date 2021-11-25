// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь-яке не валідне ім'я, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let normalize = (str) => {
//     let x = ['.', '-', '_'];
//     let ar = str.split('');
//     for (let i = 0; i < x.length; i++) {
//         for (let e = 0; e < ar.length; e++) {
//             if (x[i] === ar[e]) {
//                 ar[e] = ' ';
//             }
//         }
//     }
//     return ar.join('').replace(/\s+/g, ' ').trim();
// };
// console.log(normalize(n1));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNums = (arr) => {
    for (let i = 0; i < Math.round(Math.random() * 100); i++) {
        arr[i] = Math.round(Math.random() * 50)
    }
    return arr;
};
// console.log(randomNums([]));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let x = randomNums([]);
x.sort(function(a, b){return a - b});
console.log(x);
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let y = randomNums([]);
    y = y.filter(function (number) {
    return number % 2 === 0;
});
console.log(y);
//
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let z = randomNums([]);
z = z.map((item) => {return item.toString()});
console.log(z);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = (direction) => {
    if (direction === 'ascending') {
        nums.sort(function(a, b){return a - b});
    } else if (direction === 'descending' ) {
        nums.sort(function(a, b){return b - a})
    }
    return nums;
};
console.log(sortNums('ascending'));
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortArray = (array) => {
    return array.sort(function (a,b){return a.monthDuration - b.monthDuration}).filter(function (number) {return number.monthDuration > 5});
};
console.log(sortArray(coursesAndDurationArray));
//
// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.write(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

function cutString (str, n) {
    let x = Math.ceil(str.length / n);
    let y = [];

    for (let i = 0, e = 0; i < x; i++, e += n) {
        y[i] = str.substr(e, n);
    }
    return y;
}

console.log(cutString('наслаждение', 3));
