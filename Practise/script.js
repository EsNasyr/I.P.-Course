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

// const arr = ["Harry", 5, "Gareth", 3, "Nasyr", 5];
// arr[10] = 11;
// console.log(arr)
//
// const obj = {
//   "Harry": 5,
//   "Gareth": 3,
//   "Nasyr": 5,
//     asd: {
//       3: 46
//     }
// };
// const Maksut = {};
// obj.Harry = 25;
// obj[Maksut] = 5; // Пример добавления элемента в объект (обращение к несуществующему элементу)
// obj['Urmat'] = 6; // Пример добавления элемента в объект (обращение к несуществующему элементу)
// console.log(obj);

//
// ---------- 3
// 4.Простое общение с пользователем ----------
//

//alert('THE COMEBACK')

//const result = confirm('Are you successful person?');

// const response1 = +prompt('Enter a number');
// const response2 = +prompt('Enter a number');
// console.log(response1 + response2);

// const answer = prompt("How old are you?", "15")
// console.log(typeof(answer))

// const answers = []
//
// answers[0] = prompt("Whats your name?");
// answers[1] = prompt("Whats your surname?");
// answers[2] = prompt("How old are you?");
//
// document.write(`
// <ul>
// <li>Name: ${answers[0]}</li>
// <li>Surname: ${answers[1]}</li>
// <li>Age: ${answers[2]}</li>
// <ul/>
// `)
//
// console.log(answers)
//
// ---------- 4
// 5.Интерполяция ----------
//

// const category = "shoes";
//
// console.log(`https://home/${category}/NikeAir`);
//
// const name = "Nasyr";
//
// alert(`Привет ${name}`)

//
// ---------- 5
// 6.Операторы в JS ----------
//

console.log("arr" + " - obj");
console.log(4 + " - obj");
console.log(4 + +"5");

let incr = 10,
    decr= 10;

//incr++;
//decr--;

// console.log(incr++); //10 //Костветскная форма, сначало выдает первоначальное значение, а затем новое значение
// console.log(--decr); //9 //Префиксная форма сразу выдает новое значание
//
// console.log(5%2); //1 //Деление с остатком, возвращает остаток
//
// console.log(2*4 == 8); //true //Нестрогое сравнение
// console.log(2*4 == '8'); //true
// console.log(2*4 === '8'); //false //Строгое сравнение
// console.log(2*4 === 8); //true

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose); //false
console.log(isChecked || isClose); //true
console.log(isChecked && !isClose); //true

console.log(2 + 2 * 2 != 8); //true
console.log(2 + 2 * 2 != 6); //false
console.log(2 + 2 * 2 !== '6'); //true
//
// ---------- 6