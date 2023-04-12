"use strict";
// 1. Переменные и строгий режим ----------
//

// let number = 5;
// const day = 1;
//
// number = 10;
// console.log(number);
//
// const object = {
//   a: 18
// };
//
// object.a = 20;
// console.log(object.a);
//
// console.log(pau); // Виден до объявления перемнной
// var pau = 15;
//
// {
//     var res = 35; //ЗАМЫКАНИЕ
// }
// console.log(res);
//
// // a = 59;
// // console.log(a);
//
// //
// // 1 ----------
// // 2.Классификация типов данных в JavaScript ----------
// //
//
// let num = 10;
// console.log(4/0); // Infinity
// console.log('pau' * 20); //NaN
//
// const person = '15';
//
// const bool = true;
//
// //console.log(something); //null
//
// let under;
// console.log(under);
//
// const object2 = {
//     name: 'Nasyr',
//     surname: 'Esenbaev'
// };
// console.log(object2.name + ' ' + object2.surname);
// console.log(object2['name'] + ' ' + object2['surname']);
//
// let arr = ['nasa', 7, true, {}, []];
// console.log(arr[0])

//
// ---------- 2
// ---------- 3
//

const arr = ["Harry", 5, "Gareth", 3, "Nasyr", 5];
arr[10] = 11;
console.log(arr)

const obj = {
  "Harry": 5,
  "Gareth": 3,
  "Nasyr": 5,
    asd: {
      3: 46
    }
};
const Maksut = {};
obj.Harry = 25;
obj[Maksut] = 5; // Пример добавления элемента в объект (обращение к несуществующему элементу)
obj['Urmat'] = 6; // Пример добавления элемента в объект (обращение к несуществующему элементу)
console.log(obj);
//
// ---------- 3