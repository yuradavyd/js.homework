// // Все робити за допомоги js.
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// //
//
// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.style.backgroundColor = 'grey';
// block.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias fugiat officiis optio?'
// document.body.appendChild(block);
// let wrap = document.getElementsByClassName('wrap');
// let newBlock = wrap[0].cloneNode(true);
// document.body.appendChild(newBlock);
//
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// //
// let ul = document.querySelector('.menu')
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// for (let i = 0; i < arr.length; i++) {
//     let elementLi = document.createElement("li");
//     elementLi.innerHTML = `${arr[i]}`;
//     ul.appendChild(elementLi);
// }
//
// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray) {
//     let newDiv = document.createElement('div');
//     let title = document.createElement('h4');
//     let monthDuration = document.createElement('div');
//     title.textContent = `${element.title}`;
//     monthDuration.textContent = `${element.monthDuration}`;
//     newDiv.append(title, monthDuration);
//     document.body.appendChild(newDiv);
// }
// //
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
//     з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    let title = document.createElement('h1');
    title.classList.add('heading');
    let monthDuration = document.createElement('p');
    monthDuration.classList.add('description')
    title.textContent = `${element.title}`;
    monthDuration.textContent = `${element.monthDuration}`;
    newDiv.append(title, monthDuration);
    document.body.appendChild(newDiv);
}