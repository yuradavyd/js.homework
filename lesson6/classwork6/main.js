// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь-яке не валідне ім'я, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let normalize = (str) => {
    let x = ['.', '-', '_'];
    let ar = str.split('');
    for (let i = 0; i < x.length; i++) {
        for (let e = 0; e < ar.length; e++) {
            if (x[i] === ar[e]) {
                ar[e] = ' ';
            }
        }
    }
    return ar.join('').replace(/\s+/g, ' ').trim();
};
console.log(normalize(n1));
