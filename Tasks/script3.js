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