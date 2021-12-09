// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
let name = document.getElementById('name');
let age = document.getElementById('age');
let btn = document.getElementById('btn');
let form = 'form';

btn.onclick = function () {
    let user = {
        name: name.value,
        age: age.value
    }
    localStorage.setItem(form,JSON.stringify(user))
};

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let model = document.getElementById('model');
let type = document.getElementById('type');
let volume = document.getElementById('volume');
let btn2 = document.getElementById('btn2');
let arr = [];
let car = 'car';

btn2.onclick = function () {
    arr.push(model.value, type.value, volume.value);
    localStorage.setItem(car,JSON.stringify(arr));
};