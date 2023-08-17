// 8.Логические операторы ----------
//
// console.log( NaN || 2 || undefined ); //2
//
// console.log( NaN && 2 && undefined ); //NaN
//
// console.log( 1 && 2 && 3 ); //3
//
// console.log( !1 && 2 || !3 ); //false
//
// console.log( 25 || null && !3 ); //25
//
// console.log( NaN || null || !3 || undefined || 5); //5
//
// console.log( NaN || null && !3 && undefined || 5); //5
//
// console.log( 5 === 5 && 3 > 1 || 5); //true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
//
//
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// } //Done!

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
//
//
// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// } //Done!

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
//
//
// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// } //нет
//
// ---------- 8
// Tasks 1
//
// for (let i = 5; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 20; i > 10; i--) {
//     if (i === 13) break;
//     console.log(i)
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i)
// }

// let i = 2;
// while(i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);

// Tasks 1
// Tasks 2
//
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i]
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i <= data.length; i++) {
//     if (typeof(data[i]) == "number") {
//         data[i] *= 2
//     }
//     if (typeof(data[i]) == "string") {
//         data[i] += ' - done'
//     }
// }
// console.log(data);

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];
    // for (let i = 1; i <= data.length; i++) {
    //     result[i - 1] = data[data.length - i];
    // }
    // console.log(result);

// Tasks 2
// Tasks 3
// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 5; j >= i; j--) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);
// Tasks 3
// Tasks 4
// Место для первой задачи
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }
// console.log(sayHello("Антон!"));
// // Место для второй задачи
// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1];
// }
// console.log(returnNeighboringNumbers(5));
// // Место для третьей задачи
// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }
//     return str;
// }
//
// console.log(getMathResult(5, 3));
// console.log(getMathResult(3, 10));
// console.log(getMathResult(10, 5));
// console.log(getMathResult(10, '5'));
// console.log(getMathResult(10, 0));
// console.log(getMathResult(20, -5));
// Tasks 4
// Tasks 5

// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }
//
//     let volume = 0,
//         area = 0;
//
//     volume = length * length * length;
//     area = 6 * (length * length);
//
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');
// calculateVolumeAndArea(-15);
//
//
//
// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//
//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//
//     return Math.ceil(seatNumber / 4);
// }
// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7));
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber('Hello'));
// Tasks 5
// Tasks 6
// function getTimeFromMinutes(minutes) {
//     if (typeof (minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
//         return "Ошибка, проверьте данные";
//     }
//     let hours = Math.round(minutes / 60 - 0.50);
//     let min = minutes % 60;
//     if (hours === 1) {
//         return `Это ${hours} час и ${min} минут`
//     }
//     else if (hours >= 2 && hours <= 4) {
//         return `Это ${hours} часа и ${min} минут`
//     }
//     else if (hours === 0 || hours >= 5 && hours <= 10) {
//         return `Это ${hours} часов и ${min} минут`
//     }
// }
// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(15.4));
// console.log(getTimeFromMinutes('15'));
// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(-150));



// function findMaxNumber(a, b, c, d) {
//     if (arguments < 4 || typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
//         return 0
//     }
//     return Math.max(a, b, c, d)
// }
//
// console.log(findMaxNumber(1, 5, 6.6, 11));
// console.log(findMaxNumber(25, 5.24, '6.6', 11));
// console.log(findMaxNumber(1, 5, 6.6));
// console.log(findMaxNumber(1, 5, 6.6, true));
// console.log(findMaxNumber(1, 5, 6.6));


// Tasks 6
// Tasks 7

function fib(n) {
    if (typeof n !== 'number') {
        return '';
    }
    let first = 0;
    let second = 1;
    let result = '';
    for (let i = 0; i < n; i++) {
        if (i + 1 === n) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}

console.log(fib(8));
console.log(fib('werew'));
console.log(fib(true));
// Tasks 7

