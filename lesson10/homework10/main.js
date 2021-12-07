// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
let text = document.getElementById('text');
let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    text.style.display = 'none';
};

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementsByClassName('btn')[0];
// btn.onclick = function () {
//     btn.style.display = 'none';
// };

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let btn2 = document.getElementById('btn2').onclick = function () {
    let age = document.getElementById('age').value;
    if (age >= 18) {
        alert('Ласкаво просимо!');
    } else {
        alert('Підростіть)');
    }
};


// - Создайте меню, которое раскрывается/сворачивается при клике
//
let menu = document.querySelector('.menu');
let btn3 = document.getElementById('btn3');

btn3.onclick = function () {
    menu.classList.toggle('hidden');
};
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentsList = [
    {title: 'title1', body: 'body1'},
    {title: 'title2', body: 'body2'},
    {title: 'title3', body: 'body3'},
    {title: 'title4', body: 'body4'},
];

let divMain = document.createElement('div');
for (const item of commentsList) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerText = item.title;
    let p = document.createElement('p');
    p.innerHTML = item.body;
    let btn = document.createElement('button');
    btn.innerHTML = 'click me';
    btn.onclick = function () {
        p.classList.add('hidden');
    }
    div.append(h3, p, btn);
    divMain.append(div);
}
document.body.appendChild(divMain)