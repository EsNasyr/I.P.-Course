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

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}
calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);



function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
}
console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));
// Tasks 5

