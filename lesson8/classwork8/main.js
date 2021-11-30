// Взяти файл template_2.html та працювати в ньому
// Напишіть код, який :
// a) змінює текст елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let mainHeader = document.getElementById('main_header');
mainHeader.textContent = 'september - 2021';

// b) робить шириниу елементу ul 400px

let ulWidth = document.getElementsByTagName("ul");
ulWidth[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkListWidth = document.getElementsByClassName('linkList');
for (const element of linkListWidth) {
    element.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let getlistElement2Text = document.getElementsByClassName('listElement2');
console.log(getlistElement2Text[0].textContent);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let getLiBackground = document.getElementsByTagName("li");
for (const element of getLiBackground) {
    element.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let addAclass = document.getElementsByTagName('a');
for (const element of addAclass) {
    element.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let getA = document.getElementsByTagName("a");
for (const element of getA) {
    if (element.textContent === 'link3') {
        element.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let getA2 = document.getElementsByTagName("a");
for (const element of getA) {
    element.classList.add(`element_${element.textContent}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let getSUbHeader1 = document.getElementsByClassName('sub-header');
for (const element of getSUbHeader1) {
    element.style.backgroundColor = prompt('');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let getSUbHeader2 = document.getElementsByClassName('sub-header');
for (const element of getSUbHeader2) {
    if (element.textContent === 'content 2 segment') {
        element.style.color = prompt('');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()

let getContent1 = document.getElementsByClassName('content_1');
getContent1[0].textContent = prompt('');

// l) отримати елементи p та змінити їм padding на 20px

let getP = document.getElementsByTagName("p");
for (const element of getP) {
    element.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let getText2 = document.getElementsByClassName('text2');
getText2[0].textContent = 'sep-2021';