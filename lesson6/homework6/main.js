// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hw = 'hello world';
// console.log(hw.length);
//
// let lips = 'lorem ipsum';
// console.log(lips.length);
//
// let js = 'javascript is cool';
// console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hw = 'hello world';
// console.log(hw.toUpperCase());
//
// let lips = 'lorem ipsum';
// console.log(lips.toUpperCase());
//
// let js = 'javascript is cool';
// console.log(js.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hw = 'HELLO WORLD';
// console.log(hw.toLowerCase());
//
// let lips = 'LOREM IPSUM';
// console.log(lips.toLowerCase());
//
// let js = 'JAVASCRIPT IS COOL';
// console.log(js.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log((str.split(' ').join('')));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => {
//     return str.split(' ')
// };
// console.log(stringToarray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let deleteCharacters = (str, lenght) => {
//     return str.substring(0, lenght);
// };
// console.log(deleteCharacters(str,7))
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insertDash = (str) => {
//     return str.split(' ').join('-').toUpperCase();
// };
// console.log(insertDash(str));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'каждый охотник желает знать';
// let toUpperCaseFirst = (str) => {
//     return  str[0].toUpperCase() + str.slice(1);
// };
// console.log(toUpperCaseFirst(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'каждый охотник желает знать';
// let capitalize = (str) => {
//     return str.split(' ').map((item) => {return item.charAt(0).toUpperCase() + item.slice(1)}).join(' ')
// }
// console.log(capitalize(str));


