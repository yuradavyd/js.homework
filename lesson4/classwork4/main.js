// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function num3(a,b,c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if(b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// num3(1,2,3)
//
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//
// function num3(a,b,c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if(b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// num3(1,2,3)

// - створити функцію яка повертає найбільше число з масиву

// function arr_max(array) {
//     let x = array[0]
//     for (let i = 0; i < array.length; i++) {
//        if (array[i] > x) {
//            x = array[i];
//        }
//     }
//     console.log(x);
// }
// arr_max([1,2,3,4,5])

// - створити функцію яка повертає найменьше число з масиву

// function arr_min(array) {
//     let x = array[0]
//     for (let i = 0; i < array.length; i++) {
//        if (array[i] < x) {
//            x = array[i];
//        }
//     }
//     console.log(x);
// }
// arr_min([1,2,3,4,5])

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function arr_sum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//         }
//     console.log(sum)
//     return  sum;
//     }
// arr_sum([1,2,3,4,5])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function arr_ser(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//         }
//     console.log(sum / array.length)
//     return  sum / array.length;
//     }
// arr_ser([1,2,3,4,5])

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function num_minmax() {
//     let max = arguments[0]
//     let min = arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min)  {
//             min = arguments[i];
//         } else if(arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
// num_minmax(1,2,3,4,5)

// - створити функцію яка заповнює масив рандомними числами

// function fill(array) {
//     for (let i = 0; i < 100; i++) {
//         array[i] = Math.round(Math.random()*100)
//     }
//     console.log(array)
// }
// fill([])

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function fill(array,limit) {
//     for (let i = 0; i < limit; i++) {
//         array[i] = Math.round(Math.random()*100)
//     }
//     console.log(array)
// }
// fill([],50)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// function reverse(array) {
//     let y = [];
//     let x = 0;
//     for (let i = array.length - 1; i >= 0; i--) {
//          y[x] = array[i]
//          x++
//     }
//     console.log(y)
// }
// reverse([1,2,3])
