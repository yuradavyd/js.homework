// // - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // -- отримує текст з параграфа з id "content"
//
// let pContent = document.querySelector('#content');
// console.log(pContent.textContent);
//
// // -- отримує текст з блоку з id "rules"
//
// let divFc = document.getElementsByClassName('fc');
// console.log(divFc[0].textContent);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
//
// let pContent2 = document.querySelector('#content');
// pContent2.innerHTML = 'New text';
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
//
// let divRules = document.querySelector('#rules');
// divRules.textContent = 'Okten';
//
// // -- змініть кожному елементу колір фону на червоний
// pContent.style.backgroundColor = 'red';
// divFc[0].style.backgroundColor = 'red';
//
// let fcRules = document.getElementsByClassName('fc_rules');
// for (const element of fcRules) {
//     element.style.backgroundColor = 'red';
// }
//
// // -- змініть кожному елементу колір тексту на синій
//
// pContent.style.color = 'blue';
// divFc[0].style.color = 'blue';
//
// let fcRulesText = document.getElementsByClassName('fc_rules');
// for (const element of fcRules) {
//     element.style.color = 'blue';
// }
//
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let divRules2 = document.getElementById('rules');
// console.log(divRules2.classList);
//
// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// for (const element of fcRules) {
//     element.style.color = 'red';
// }