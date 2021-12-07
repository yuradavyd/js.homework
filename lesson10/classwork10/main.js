// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let input1 = document.querySelector('.inpt1');
// let input2 = document.querySelector('.inpt2');
// let btn1 = document.getElementById('btn1').onclick = function () {
//     console.log(input1.value);
//     console.log(input2.value);
// };
// //
// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// //
// let input3 = document.querySelector('.inpt3');
// let input4 = document.querySelector('.inpt4');
// let input5 = document.querySelector('.inpt5');
//
// let btn2 = document.getElementById('btn2')
//
// btn2.addEventListener('click', function () {
//     let tr = input3.value;
//     let td = input4.value;
//     let text = input5.value;
//
//     function generateTable(tr, td, text) {
//         let tbl = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         tbl.style.border = '1px solid grey';
//         divTable.appendChild(tbl);
//         let div3 = document.getElementById('div3')
//         div3.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid darkgreen';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid darkgreen';
//                 td.innerText = `${text}`;
//                 tbl.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generateTable(tr, td, text);
// })

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let loh = ['дурак', 'бовдур', 'виродок', 'йолоп'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'перевірити';
// document.body.append(input, button);
//
// button.onclick = function () {
//     let inputValue = input.value;
//
//     for (let e of loh) {
//         if (e === inputValue) {
//             alert('не выражайся©');
//             return;
//         } else {
//             alert('молодець!')
//         }
//     }
// })

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let loh = ['дурак', 'бовдур', 'виродок', 'йолоп'];
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'перевірити';
document.body.append(input, button);

button.onclick = function () {
    let text = input.value
    text.split(" ").forEach(item =>{
        if (loh.includes(item)) {
            alert("шат ап")
        }
    })
}

