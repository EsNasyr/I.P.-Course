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

// const result = confirm('Are you successful person?');

//const response1 = +prompt('Enter a number');
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
// }; // function declaration - создается только тогда, когда до нее доходит поток кода, можно объявлять только после ее существования
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

// 14. Методы и свойства строк и чисел
//
// const str1 = "test";
// const str2 = "tEst";
// let arr = [1, 2, 3];
// //console.log(arr.length);
// //console.log(str.length);
// //console.log(str[3]);
// console.log(str1.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(str1);
//
// const fruit = "Some fruit";
//
// console.log(fruit.indexOf("S"));
//
// const logo = "Hello World!";
// const newLogo = logo.slice(6,11);
// console.log(newLogo);
// console.log(logo.slice(6, 11));
//
// const practise = 'Just do it!';
// console.log(practise.slice(0, 5));
// console.log(practise.slice(5, 7));
// console.log(practise.slice(8, 10)); //10 - индекс на котором заканчивается вырез, 10 не включает в себя букву // it
// console.log(practise.slice(8));
// console.log(practise.slice(-7, -1)); // поддерживает отрицательные значение, отрицательный аргумент - начинает вырезать с конца
//
// console.log(practise.substring(5, 7)); // не поддерживает отрицательные значение, -6 = 0
//
// console.log(practise.substr(5, 2));
// Числа
// const number1 = 4;
// const number2 = 34;
// const number3 = 642;
// const number4 = 24.51;
// console.log(Math.max(number1, number2, number3));
// console.log(Math.min(number1, number2, number3));
// console.log(Math.min(number1, number2, number3));
// console.log(Math.round(number4));
// console.log(number4.toString(4));
//
// const test = "22.3pxewrnlrp";
// console.log(parseInt(test)); // переводит число в другую систему исчисления // 22
// console.log(parseFloat(test)); // оставляет дроби // 22.3
//
// ---------- 14

// 15. Callback - функции ----------
// Callback - функция которая должна быть выполнена, после того как другая фунция завершила выполенение
// function first() {
//     // Do something
//     setTimeout(function () {
//         console.log(1)
//     }, 500);
// }
//
// function second() {
//     console.log(2)
// }
//
// first();
// second();
//
// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }
//
// function done () {
//     console.log('Я прошел этот урок')
// }
//
// learnJS('JavaScript', done);
// ---------- 15
// 16. Объекты, деструктуризация (ES6) ----------

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
      border: 'red',
      background: 'black'
  },
    makeTest: function () {
        return console.log("Hello World!")
    }
};

const {border, background} = options.colors;
console.log(border, background);
console.log(Object.keys(options).length);
options.makeTest();



// console.log(options.name);
//
// delete options.name;
//
// console.log(options);

//
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


// ---------- 16
