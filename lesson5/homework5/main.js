// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let s = (a, b) => {
//     return a * b
// };
// console.log(s(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let s = ((pi,r) => {
//     return pi* Math.pow(r,2)
// })(3.14,5)
// console.log(s);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
//
// let s = ((pi, r, h) => {
//     return 2 * pi * r * h + 2 * pi * Math.pow(r, 2);
// })(3.14, 5, 3);
// console.log(s);

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let arr = ((array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// })([1,2,3,4,5,8])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let p = ((text) => {
//      document.write(`<p>${text}</p>`);
// })('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus mollitia, nostrum quasi quidem sequi ut.')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ul = ((li) => {
//     document.write(`<ul>`);
//     document.write(`<li>${li}</li>`);
//     document.write(`<li>${li}</li>`);
//     document.write(`<li>${li}</li>`);
//     document.write(`</ul>`);
// })('hello okten')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let ul = (li,num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${li}</li>`)
//     }
//     document.write(`</ul>`);
// }
// ul('hello okten',3);
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array_list = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// array_list([1,2,3,'four','five','six',true,false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array_obj = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<div>${array[i].id}. ${array[i].name}. age is - ${array[i].age}</div>`)
//     }
// }
// array_obj([{id:1,name:'Yura',age:19},{id:2,name:'Sashko',age:20}])
