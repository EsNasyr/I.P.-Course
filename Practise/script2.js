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

// console.log("arr" + " - obj");
// console.log(4 + " - obj");
// console.log(4 + +"5"); // Если использовать два знака "+" строка превратится в число //9

// let incr = 10,
//     decr= 10;
//
// incr++;
// decr--;
//
// console.log(incr++); //11 //Костветскная форма, сначало выдает первоначальное значение, а затем новое значение
// console.log(--decr); //9 //Префиксная форма сразу выдает новое значание
//
// console.log(5%2); //1 //Деление с остатком, возвращает остаток
//
// console.log(2*4 == 8); //true //Нестрогое сравнение
// console.log(2*4 == '8'); //true
// console.log(2*4 === '8'); //false //Строгое сравнение
// console.log(2*4 === 8); //true

// const isChecked = true,
//       isClose = false;
//
// console.log(isChecked && isClose); //false
// console.log(isChecked || isClose); //true
// console.log(isChecked && !isClose); //true
//
// const numbers = 2 + 2 * 2;
// console.log(2 + 2 * 2 != 8); //true
// console.log(numbers != 6); //false //значение
// console.log(numbers !== '6'); //true //значение и тип данных
//
// ---------- 6
// 7.Условия ----------
//

// if (4 == 4) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// const num = 50;
//
// // (num === 50) ? (console.log(true)) : (console.log(false));
//
// switch (num) {
//     case 49:
//         console.log(false);
//         break;
//     case 12:
//         console.log(false);
//         break;
//     case '50':
//         console.log(true);
//         break;
//     default:
//         console.log("Not this time");
//         break;
// }
//
// ---------- 7

// 8.Логические операторы ----------
//
// const hamburger = 12;
// const taco = 0;
//
// if (hamburger && taco) {
//     console.log('I am full');
// } else {
//     console.log('I am not full')
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
//
// console.log(hamburger === 3 && cola && fries);
//
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'qwerty');
// // Когда логический оператор 'и' работает с данными,
// // 1 - при ошибке он возвращает первое неверное значение на котором он остановился
// // 2 - при правильном решении он возращает значение на котором остановилось это решение
// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('We are full');
// } else {
//     console.log('We are leaving')
// }
// const qwert = '1234';

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
// console.log(hamburger || cola || fries);
//
// if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
//     console.log('We are pleasant');
// } else {
//     console.log('We are leaving')
// }
//
// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport || alexReport || samReport || mariaReport);
//
// console.log(!0);
//
// ---------- 8
// 9.Циклы ----------
//
// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++
// }

// do {
//     console.log(num);
//     num++
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue
//     }
//     console.log(i);
// }
//
// ---------- 9
// 10. Цикл в цикле, метки ----------
//
// for(let i = 0; i < 3; i++) {
//     console.log(i);
//     for(let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
// let result = '';
// const length = 7;
//
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result)

// first: for(let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for(let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for(let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }
//
// ---------- 10
// 11. Функции, стрелочные функции ----------
//
// let num = 20;
// function showFirstMessage(text1, text2) {
//     console.log(text1 + text2);
//     num = 10
// }
// showFirstMessage('Hello ', 'World');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(3, 4));
// console.log(calc(5, 3));
// console.log(calc(9, 7));
//
// function ret() {
//     let num = 50;
//     return num
// } // function expression - создается до запуска скрипта, можно объявлять до ее существования
// const anotherNum = ret();
// console.log(anotherNum);
// const logger = function () {
//     console.log('Hello')
// }; // function expression - создается только тогда, когда до нее доходит поток кода, можно объявлять только после ее существования
// logger()

// const calcFunc = (a, b) => {
//     console.log(a + b)
// };
// calcFunc(3, 3)
//
// ---------- 11
// 12. Еще раз про аргументы функций
// 13. Про важность return
//
// const usdCurr = 87;
// const eurCurr = 96;
// const discount = 0.9;
//
// function convert(amount, curr) {
//     return curr * amount; // return прекращает работу функции
// }
//
// function promotion(result) {
//     console.log(result * discount)
// }
//
// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }
//
// console.log(typeof test());
//
// function doNothing() {}
// console.log(doNothing() === undefined); //true
//
// ---------- 12
// ---------- 13

