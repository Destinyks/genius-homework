// ---1---/
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// function checkAge(age) {
//     (age > 18) ? console.log(true) :  confirm('Батьки дозволили?');
// }

// checkAge(17);


// ---2--- //
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//     return a < b ? a : b;
// }

// console.log(min(50, 10));


// ---3--- //
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const youAgree = (question, yes, no) => {
//         if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// };

// youAgree(
//     "Ви згодні?", 
//     () => alert("Ви погодились."), 
//     () => alert("Ви скасували виконання.")
// );